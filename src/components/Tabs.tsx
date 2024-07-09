import { useState, ReactElement, ReactNode, MouseEvent } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}
interface TabsProps {
  children: ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className=" mx-auto">
      <div className="flex border-b border-gray-300 md:max-w-[600px] max-w-[400px] mx-auto">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "border-b-4 border-primary2"
                : ""
            } flex-1 text-gray-700 font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="hidden">{children}</div>;
};
export { Tabs, Tab };
