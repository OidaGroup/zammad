<!-- Copyright (C) 2012-2024 Zammad Foundation, https://zammad-foundation.org/ -->
<!-- eslint-disable zammad/zammad-detect-translatable-string -->

<script setup lang="ts">
import { computed } from 'vue'
import CommonAlert from '#shared/components/CommonAlert/CommonAlert.vue'
import CommonButton from '#desktop/components/CommonButton/CommonButton.vue'
import Form from '#shared/components/Form/Form.vue'

const alphabetOptions = computed(() =>
  [...Array(26).keys()].map((i) => ({
    value: i,
    label: `Item ${String.fromCharCode(65 + i)}`,
    disabled: Math.random() < 0.5,
  })),
)

const treeselectOptions = [
  {
    value: 0,
    label: 'Item A',
    children: [
      {
        value: 1,
        label: 'Item 1',
        children: [
          {
            value: 2,
            label: 'Item I',
          },
          {
            value: 3,
            label: 'Item II',
          },
          {
            value: 4,
            label: 'Item III',
          },
        ],
      },
      {
        value: 5,
        label: 'Item 2',
        children: [
          {
            value: 6,
            label: 'Item IV',
          },
        ],
      },
      {
        value: 7,
        label: 'Item 3',
      },
    ],
  },
  {
    value: 8,
    label: 'Item B',
  },
  {
    value: 9,
    label: 'Ítem C',
  },
]

const formSchema = [
  {
    isLayout: true,
    element: 'div',
    attrs: {
      class: 'grid grid-cols-2 gap-y-2.5 gap-x-3',
    },
    children: [
      {
        name: 'text_1',
        label: 'Text input',
        type: 'text',
        outerClass: 'col-span-1',
        props: {
          maxLength: 150,
        },
      },
      {
        name: 'toggle_1',
        label: 'Column toggle',
        type: 'toggle',
        outerClass: 'col-span-1',
        wrapperClass: 'mt-6',
        props: {
          variants: {
            true: 'yes',
            false: 'no',
          },
        },
      },
      {
        name: 'toggle_2',
        label: 'Row toggle',
        type: 'toggle',
        props: {
          variants: {
            true: 'yes',
            false: 'no',
          },
        },
      },
    ],
  },
  {
    type: 'select',
    name: 'select_1',
    label: 'Single select',
    clearable: true,
    props: {
      options: alphabetOptions.value,
    },
  },
  {
    type: 'select',
    name: 'select_2',
    label: 'Multi select',
    clearable: true,
    props: {
      multiple: true,
      options: alphabetOptions.value,
    },
  },
  {
    type: 'treeselect',
    name: 'treeselect_1',
    label: 'Single treeselect',
    clearable: true,
    props: {
      options: treeselectOptions,
    },
  },
  {
    type: 'treeselect',
    name: 'treeselect_2',
    label: 'Multi treeselect',
    clearable: true,
    props: {
      multiple: true,
      options: treeselectOptions,
    },
  },
]
</script>

<template>
  <div class="w-1/2 ltr:ml-2 rtl:mr-2">
    <h2 class="text-xl">Buttons</h2>

    <h3>Text only</h3>
    <div class="space-x-3 py-2 flex">
      <CommonButton variant="primary" />
      <CommonButton variant="secondary" />
      <CommonButton variant="tertiary" />
      <CommonButton variant="submit" />
      <CommonButton variant="danger" />
    </div>

    <h3>With icon</h3>
    <div class="space-x-3 py-2 flex">
      <CommonButton variant="primary" prefix-icon="logo-flat" />
      <CommonButton variant="secondary" prefix-icon="logo-flat" />
      <CommonButton variant="tertiary" prefix-icon="logo-flat" />
      <CommonButton variant="submit" prefix-icon="logo-flat" />
      <CommonButton variant="danger" prefix-icon="logo-flat" />
    </div>

    <h3>Icon only</h3>
    <div class="space-x-3 py-2 flex items-center">
      <CommonButton variant="primary" icon="logo-flat" />
      <CommonButton variant="secondary" icon="logo-flat" />
      <CommonButton variant="tertiary" icon="logo-flat" />
      <CommonButton variant="submit" icon="logo-flat" />
      <CommonButton variant="danger" icon="logo-flat" />
      <CommonButton variant="primary" icon="logo-flat" size="medium" />
      <CommonButton variant="secondary" icon="logo-flat" size="medium" />
      <CommonButton variant="tertiary" icon="logo-flat" size="medium" />
      <CommonButton variant="submit" icon="logo-flat" size="medium" />
      <CommonButton variant="danger" icon="logo-flat" size="medium" />
      <CommonButton variant="primary" icon="logo-flat" size="large" />
      <CommonButton variant="secondary" icon="logo-flat" size="large" />
      <CommonButton variant="tertiary" icon="logo-flat" size="large" />
      <CommonButton variant="submit" icon="logo-flat" size="large" />
      <CommonButton variant="danger" icon="logo-flat" size="large" />
    </div>

    <h3>Misc</h3>
    <div class="space-y-2 py-2 flex-wrap">
      <CommonButton variant="submit" block>Block button</CommonButton>
      <CommonButton variant="danger" disabled>Disabled button</CommonButton>
    </div>
  </div>

  <div class="w-1/2 ltr:ml-2 rtl:mr-2">
    <h2 class="text-xl">Alerts</h2>

    <CommonAlert
      variant="info"
      dismissible
      link="https://youtu.be/U6n2NcJ7rLc"
      link-text="Party 🎉"
      class="mb-2.5"
      >It's Friday!</CommonAlert
    >
    <CommonAlert variant="success" class="mb-2.5"
      >Hooray! Ticket got updated.</CommonAlert
    >
    <CommonAlert variant="warning" class="mb-2.5"
      >Heee! You're typing too fast.</CommonAlert
    >
    <CommonAlert variant="danger" class="mb-2.5"
      >Ooops! You broke it.</CommonAlert
    >
  </div>

  <div class="ltr:ml-2 rtl:mr-2">
    <h2>Labels</h2>
    <CommonLabel size="small" prefix-icon="logo" suffix-icon="logo-flat"
      >Small</CommonLabel
    >

    <br />

    <CommonLabel size="medium" prefix-icon="logo" suffix-icon="logo-flat"
      >Medium</CommonLabel
    >

    <br />

    <CommonLabel size="large" prefix-icon="logo" suffix-icon="logo-flat"
      >Large</CommonLabel
    >

    <br />

    <CommonLabel size="xl" prefix-icon="logo" suffix-icon="logo-flat"
      >Extra large</CommonLabel
    >
  </div>
  <div class="w-1/2 ltr:ml-2 rtl:mr-2">
    <h2 class="text-lg">Form</h2>

    <Form class="mb-96" form-class="mb-2.5 space-y-2.5" :schema="formSchema" />
  </div>
</template>
