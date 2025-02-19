import { Select } from "antd";

const { Option } = Select;

export const employment = [
    { value: 'полная занятость' },
    { value: 'частичная занятость' },
    { value: 'проектная работа' },
];

export const work__time = [
    { value: 'полный день' },
    { value: 'гибкий график' },
    { value: 'удаленная работа' },
];

export const selectAfter = (
    <Select defaultValue="RUB" style={{ width: 80 }}>
        <Option value="RUB">₽</Option>
        <Option value="KZT">₸</Option>
        <Option value="USD">$</Option>
        <Option value="UAH">₴</Option>
        <Option value="EUR">€</Option>
        <Option value="GBP">£</Option>
        <Option value="CNY">¥</Option>
    </Select>
);