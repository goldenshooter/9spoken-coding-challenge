export interface DatalistType {
  object_category?: string
  connection_id?: string
  user?: string
  object_creation_date?: string
  data: Array<SingleDataType>
  currency?: string
  object_origin_type?: string
  object_origin_category?: string
  object_type?: string
  object_class?: string
  balance_date?: string
}

export interface SingleDataType {
  account_category: string
  account_code: string
  account_currency: string
  account_identifier: string
  account_status: string
  account_name: string
  account_type: string
  account_type_bank: string
  system_account: string
  total_value: number
  value_type: string
}
