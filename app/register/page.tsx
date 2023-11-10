import { authOptions } from "@/auth";
import PricingCard from "@/components/PricingCard";
import { getServerSession } from "next-auth";

async function Register() {
    const session = await getServerSession(authOptions);

    return (
        <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                        Lets handle your Memebership {session?.user?.name?.split(" ")?.[0]}!
                    </p>
                </div>
            </div>

            <PricingCard redirect={false} />
        </div>
    )
}

export default Register;