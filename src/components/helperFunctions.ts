import { SingleDataType } from './types'

export function getResultFromSourceData(dataList: Array<SingleDataType>): {
  formattedRevenue: string
  formattedExpenses: string
  grossProfitMargin: string
  netProfitMargin: string
  workingCapitalRatio: string
} {
  let revenue: number = 0,
    expenses: number = 0,
    grossProfit: number = 0,
    totalValueOfCredit: number = 0,
    totalValueOfDebit: number = 0,
    liabilityCredit: number = 0,
    liabilityDebit: number = 0

  if (Array.isArray(dataList)) {
    dataList.forEach((data: SingleDataType) => {
      if (data.account_category === 'revenue') {
        revenue += data.total_value
      }
      if (data.account_category === 'expense') {
        expenses += data.total_value
      }
      if (data.account_type === 'sales' && data.value_type === 'debit') {
        grossProfit += data.total_value
      }

      // calculate assets
      if (
        data.account_category === 'assets' &&
        data.value_type === 'debit' &&
        (data.account_type === 'current' ||
          data.account_type === 'bank' ||
          data.account_type === 'current_accounts_receivable')
      ) {
        totalValueOfDebit += data.total_value
      }
      if (
        data.account_category === 'assets' &&
        data.value_type === 'credit' &&
        (data.account_type === 'current' ||
          data.account_type === 'bank' ||
          data.account_type === 'current_accounts_receivable')
      ) {
        totalValueOfCredit += data.total_value
      }

      // calculate liabilities
      if (
        data.account_category === 'liability' &&
        data.value_type === 'debit' &&
        (data.account_type === 'current' ||
          data.account_type === 'current_accounts_payable')
      ) {
        liabilityDebit += data.total_value
      }
      if (
        data.account_category === 'liability' &&
        data.value_type === 'credit' &&
        (data.account_type === 'current' ||
          data.account_type === 'current_accounts_payable')
      ) {
        liabilityCredit += data.total_value
      }
    })
  }

  const formattedRevenue = Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
    maximumFractionDigits: 0,
  }).format(revenue)
  const formattedExpenses = Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
    maximumFractionDigits: 0,
  }).format(expenses)
  const grossProfitMargin = Intl.NumberFormat('en-NZ', {
    style: 'percent',
    maximumFractionDigits: 0,
  }).format(grossProfit / revenue)
  const netProfitMargin = Intl.NumberFormat('en-NZ', {
    style: 'percent',
    maximumFractionDigits: 0,
  }).format((revenue - expenses) / revenue)
  const assets = totalValueOfDebit - totalValueOfCredit
  const liabilities = liabilityCredit - liabilityDebit
  const workingCapitalRatio = Intl.NumberFormat('en-NZ', {
    style: 'percent',
    maximumFractionDigits: 0,
  }).format(assets / liabilities)

  return {
    formattedRevenue,
    formattedExpenses,
    grossProfitMargin,
    netProfitMargin,
    workingCapitalRatio,
  }
}
