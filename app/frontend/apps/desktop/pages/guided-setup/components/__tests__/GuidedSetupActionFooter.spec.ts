// Copyright (C) 2012-2024 Zammad Foundation, https://zammad-foundation.org/

import { shallowRef } from 'vue'

import Form from '#shared/components/Form/Form.vue'
import { renderComponent } from '#tests/support/components/index.ts'
import GuidedSetupActionFooter from '../GuidedSetupActionFooter.vue'

const wrapperParameters = {
  router: true,
  form: true,
  attachTo: document.body,
  unmount: true,
}

describe('GuidedSetupActionFooter.vue', () => {
  it('renders only submit button and submit', async () => {
    const view = renderComponent(GuidedSetupActionFooter, {
      props: {
        submitButtonText: 'Create Account',
      },
      ...wrapperParameters,
    })

    const submitButton = view.getByRole('button', { name: 'Create Account' })

    expect(submitButton).toBeInTheDocument()

    await view.events.click(submitButton)

    expect(view.emitted()).toHaveProperty('submit')
  })

  it('submit form when form reference was given', async () => {
    const onSubmit = vi.fn()
    const view = renderComponent(
      {
        components: { Form, GuidedSetupActionFooter },
        template: `
        <Form ref="form" id="form" :schema="schema" @submit="onSubmit" />
        <GuidedSetupActionFooter :form="form" />
        `,
        setup() {
          const form = shallowRef()

          const schema = [
            {
              type: 'text',
              name: 'title',
              label: 'Title',
            },
          ]

          return {
            form,
            schema,
            onSubmit,
          }
        },
      },
      wrapperParameters,
    )

    await view.events.click(view.getByRole('button', { name: 'Submit' }))

    expect(onSubmit).toHaveBeenCalledOnce()
  })

  it('submit form with enter when form reference was given', async () => {
    const onSubmit = vi.fn()
    const view = renderComponent(
      {
        components: { Form, GuidedSetupActionFooter },
        template: `
        <Form ref="form" id="form" :schema="schema" @submit="onSubmit" />
        <GuidedSetupActionFooter :form="form" />
        `,
        setup() {
          const form = shallowRef()

          const schema = [
            {
              type: 'text',
              name: 'title',
              label: 'Title',
            },
          ]

          return {
            form,
            schema,
            onSubmit,
          }
        },
      },
      wrapperParameters,
    )

    const title = view.getByLabelText('Title')
    await view.events.type(title, 'Example title')
    await view.events.type(title, '{Enter}')

    expect(onSubmit).toHaveBeenCalledOnce()
  })

  it('renders back button when route is given', () => {
    const view = renderComponent(GuidedSetupActionFooter, {
      props: {
        goBackRoute: '/test',
      },
      ...wrapperParameters,
    })

    const goBackButton = view.getByRole('button', { name: 'Go Back' })

    expect(goBackButton).toBeInTheDocument()
  })

  it('renders back button when event registration exists', async () => {
    const onBack = vi.fn()
    const view = renderComponent(GuidedSetupActionFooter, {
      props: {
        onBack,
      },
      ...wrapperParameters,
    })

    const goBackButton = view.getByRole('button', { name: 'Go Back' })

    expect(goBackButton).toBeInTheDocument()

    await view.events.click(goBackButton)

    expect(onBack).toHaveBeenCalledOnce()
  })

  it('renders skip button when route is given', () => {
    const view = renderComponent(GuidedSetupActionFooter, {
      props: {
        skipRoute: '/test',
      },
      ...wrapperParameters,
    })

    const skipButton = view.getByRole('button', { name: 'Skip' })

    expect(skipButton).toBeInTheDocument()
  })

  it('renders skip button when event registration exists', async () => {
    const onSkip = vi.fn()
    const view = renderComponent(GuidedSetupActionFooter, {
      props: {
        onSkip,
      },
      ...wrapperParameters,
    })

    const skipButton = view.getByRole('button', { name: 'Skip' })

    expect(skipButton).toBeInTheDocument()

    await view.events.click(skipButton)

    expect(onSkip).toHaveBeenCalledOnce()
  })
})
