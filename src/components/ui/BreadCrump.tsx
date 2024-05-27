import React from 'react';
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

interface BreadCrumpProps {
    items: string[];
}

const BreadCrump: React.FC<BreadCrumpProps> = ({ items }) => {
    return (
        <>
            <Breadcrumb aria-label="Default breadcrumb example">
                <Breadcrumb.Item href="/" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                {items.map((pages, index) => (
                    <Breadcrumb.Item key={index} href={`/${pages.toLowerCase()}`}>
                        {pages}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </>
    );
}

export default BreadCrump;
