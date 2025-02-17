import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UpdatePizzaOrderForm from "./Partials/UpdatePizzaOrderForm";

export default function All({ auth, pizza }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Order #{pizza.id}
                </h2>
            }
        >
            <Head title={"Order #" + pizza.id} />

            <div className="py-12 p">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10">
                        <UpdatePizzaOrderForm
                            pizza={pizza}
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
