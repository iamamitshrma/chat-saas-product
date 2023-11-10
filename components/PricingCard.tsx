import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const plans = [
    {
        name: "Starter",
        id: "p0_free",
        href: "#",
        priceMonthly: null,
        description: "Get Chatting right away with anyone, anywhere!",
        features: [
            "20 Message Chat Limit in Chats",
            "2 Participant limit in Chat",
            "3 Chat Rooms Limit",
            "Supports 2 language",
            "48-hour support response time",
        ]
    },
    {
        name: "Advanced",
        id: "advanced",
        href: "#",
        priceMonthly: "$20",
        description: "Unlock the Full Potential with Advanced Pack!",
        features: [
            "Unlimited Messages in Chats",
            "Unlimited Participants in Chats",
            "Unlimited Chat Rooms",
            "Support up to 10 languages",
            "Multimedia support in chats(coming soon)",
            "1-hour, dedicated support response time",
            "Early access to New Features"
        ]
    }
]

function PricingCard({ redirect }: { redirect: boolean }) {
    return (
        <div>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                {
                    plans.map((plan) => (
                        <div key={plan.id} className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                            <div>
                                <h3 id={plan.id + plan.name} className="text-base font-semibold leading-7 text-indigo-900">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline gap-x-2">
                                    {
                                        plan.priceMonthly ? (
                                            <>
                                                <span className="text-5xl font-bold tracking-tight text-gray-900">{plan.priceMonthly}</span>
                                                <span className="text-base font-semibold leading-7 text-gray-600">/month</span>
                                            </>
                                        ) : (
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">Free</span>
                                        )
                                    }
                                </div>
                                <p className="mt-6 text-base leading-7 text-gray-600">{plan.description}</p>
                                <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                    {
                                        plan.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {
                                redirect ? (
                                    <Link href="/register" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80">Get Started Today</Link>
                                ) : (
                                    plan.id !== "p0_free" && (
                                        <CheckoutButton />
                                    )
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PricingCard