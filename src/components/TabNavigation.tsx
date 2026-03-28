interface Tab {
  id: string;
  label: string;
  icon?: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div
      role="tablist"
      aria-label="Navigasi konten materi"
      className="border-b border-sand-200 overflow-x-auto scrollbar-none"
    >
      <div className="flex min-w-max">
        {tabs.map((tab) => {
          const active = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors
                ${active
                  ? 'text-teal-soft-600'
                  : 'text-text-muted hover:text-text-secondary'
                }
              `}
            >
              {tab.icon && <span className="mr-1.5" aria-hidden="true">{tab.icon}</span>}
              {tab.label}
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-soft-500 rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
