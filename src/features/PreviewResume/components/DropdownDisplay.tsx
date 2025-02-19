import { Dropdown, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';

export const DropdownDisplay = ({ items }: IDropdownDisplayProps) => {
    return (
                <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <span style={{ fontSize: 16, color: '#5e86eb' }}>Показать</span>
                                    <DownOutlined />
                                </Space>
                            </a>
                </Dropdown>
    );
}

interface IDropdownDisplayProps {
    items: { key: string, label: React.ReactNode }[]
}