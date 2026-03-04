import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { CurrencyInput } from "../index"

const meta = {
  component: CurrencyInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/CurrencyInput",
} satisfies Meta<typeof CurrencyInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default currency input with USD selected.
 */
export const Default: Story = {
  render: () => {
    const [currency, setCurrency] = useState("USD")
    const [amount, setAmount] = useState("")

    return (
      <CurrencyInput
        placeholder="Enter amount..."
        currencyValue={currency}
        onCurrencyChange={setCurrency}
        amountValue={amount}
        onAmountChange={setAmount}
      />
    )
  },
}

/**
 * Currency input with a label.
 */
export const WithLabel: Story = {
  render: () => {
    const [currency, setCurrency] = useState("USD")
    const [amount, setAmount] = useState("")

    return (
      <CurrencyInput
        label="Price"
        placeholder="Enter amount..."
        currencyValue={currency}
        onCurrencyChange={setCurrency}
        amountValue={amount}
        onAmountChange={setAmount}
      />
    )
  },
}

/**
 * Currency input with helper text for additional guidance.
 */
export const WithHelperText: Story = {
  render: () => {
    const [currency, setCurrency] = useState("USD")
    const [amount, setAmount] = useState("")

    return (
      <CurrencyInput
        label="Price"
        placeholder="Enter amount..."
        helper="Enter the product price in your selected currency"
        currencyValue={currency}
        onCurrencyChange={setCurrency}
        amountValue={amount}
        onAmountChange={setAmount}
      />
    )
  },
}

/**
 * Currency input with error state and validation message.
 */
export const ErrorState: Story = {
  render: () => {
    const [currency, setCurrency] = useState("USD")
    const [amount, setAmount] = useState("")

    return (
      <CurrencyInput
        label="Price"
        placeholder="Enter amount..."
        error="Amount is required"
        currencyValue={currency}
        onCurrencyChange={setCurrency}
        amountValue={amount}
        onAmountChange={setAmount}
      />
    )
  },
}

/**
 * Disabled currency input.
 */
export const Disabled: Story = {
  render: () => {
    const [currency, setCurrency] = useState("IDR")
    const [amount, setAmount] = useState("10,000")

    return (
      <CurrencyInput
        label="Price"
        placeholder="Enter amount..."
        disabled
        currencyValue={currency}
        onCurrencyChange={setCurrency}
        amountValue={amount}
        onAmountChange={setAmount}
      />
    )
  },
}

/**
 * Read-only currency input.
 */
export const ReadOnly: Story = {
  render: () => {
    const [currency, setCurrency] = useState("IDR")
    const [amount, setAmount] = useState("10,000")

    return (
      <CurrencyInput
        label="Price"
        placeholder="Enter amount..."
        readOnly
        currencyValue={currency}
        onCurrencyChange={setCurrency}
        amountValue={amount}
        onAmountChange={setAmount}
      />
    )
  },
}

/**
 * Currency input with custom currency list.
 */
export const CustomCurrencies: Story = {
  render: () => {
    const [currency, setCurrency] = useState("IDR")
    const [amount, setAmount] = useState("")

    return (
      <CurrencyInput
        label="Price"
        placeholder="Enter amount..."
        currencies={["IDR", "USD", "EUR"]}
        currencyValue={currency}
        onCurrencyChange={setCurrency}
        amountValue={amount}
        onAmountChange={setAmount}
      />
    )
  },
}
