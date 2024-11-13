import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="primaryOutlined">Primary outlined</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondaryOutlined">Secondary outlined</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dangerOutlined">Danger outlined</Button>
            <Button variant="super">Super</Button>
            <Button variant="superOutlined">Super outlined</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="sidebar">Sidebar</Button>
            <Button variant="sidebarOutlined">Sidebar outlined</Button>
        </div>
    );
};

export default ButtonsPage;
