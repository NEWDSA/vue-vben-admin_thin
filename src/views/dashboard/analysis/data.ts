export interface GrowCardItem {
  icon: string
  title: string
  value: number
  total: number
  color: string
  action: string
}

export const growCardList: GrowCardItem[] = [
  {
    title: '销售额',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '本月'
  },
  {
    title: '房型销售类型占比',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: '本月'
  },
  {
    title: '综合入住率',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: '周'
  }
  // {
  //   title: '成交数',
  //   icon: 'transaction|svg',
  //   value: 5000,
  //   total: 50000,
  //   color: 'purple',
  //   action: '年'
  // }
]
