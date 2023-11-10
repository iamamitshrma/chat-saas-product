"use client"

import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {

  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if(!session?.user?.id) return;
    // push a doc into firebase doc
    // price id came from stripe dashboard
    setLoading(true);
    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      price: "price_1OACTtSCXeycb8JNbdUwcZRy",
      success_url: window.location.origin,
      cancel_url: window.location.origin
    });


    // stripe extension on firebase will create a checkout session
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if(error) {
        //show error to customer
        // inspect your cloud funtion in the fireabse console
        alert(`Oops!: ${error.message}`);
        setLoading(false);
      }
      if(url) {
        window.location.assign(url);
        setLoading(false);
      }
    })

    // redirect user to checkout page
  }
  return (
    <div className="flex flex-col space-y-2">
      {/* If subscribed show me the user is subscribed */}

      <button onClick={() => createCheckoutSession()} className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default">
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </div>
  )
}

export default CheckoutButton;