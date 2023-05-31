const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export function formatCurreny(number: number) {
    return CURRENCY_FORMATER.format(number)
}