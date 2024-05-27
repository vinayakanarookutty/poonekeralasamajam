import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function BreadCrump({ items }) {
    return (
        <>
            <Breadcrumb aria-label="Default breadcrumb example">
                <Breadcrumb.Item href="/" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                {items.map((pages) => (
                    <Breadcrumb.Item href={`${pages.toLowerCase()}`}>
                        {pages}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </>
    );
}

export default BreadCrump;
