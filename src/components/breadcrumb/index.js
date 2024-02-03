import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

function Bread() {
    return (
        <div className="container mx-auto p-5">
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <HiHome />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/components">Components</Breadcrumb.Item>
                <Breadcrumb.Item href="/breadcrumb">Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Bread;

