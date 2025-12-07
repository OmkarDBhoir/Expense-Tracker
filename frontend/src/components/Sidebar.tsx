

const Sidebar: React.FC = () => {
    const tabList: { tabId: number, tabName: string }[] = [
        {
            tabId: 1,
            tabName: "Dashboard"
        },
        {
            tabId: 2,
            tabName: "Transactions"
        },
        {
            tabId: 3,
            tabName: "Incomes"
        },
        {
            tabId: 4,
            tabName: "Expenses"
        }
    ]
    return (
        <>
            <div className="flex flex-col items-between w-[285px]">
                <div className='h-full flex flex-col'>
                    <div className="header flex items-center pl-8 h-[99px] gap-3">
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <span className="text-[22px]">Expense</span>
                                <span style={{ fontSize: "15px", color: "#51617E" }}>Tracker</span>
                            </div>
                        </div>
                    </div>
                </div>
                {tabList.map(tabItem => (
                    <div>
                        <div>{tabItem.tabName}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Sidebar;