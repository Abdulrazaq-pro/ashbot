"use client";

import { useState } from "react";
import { toast } from "sonner";

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (res.ok) {
        toast.success("You have been added to the waitlist!");
        setEmail("");
        setName("");
      } else {
        throw new Error("Failed to submit waitlist");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left side */}
          <div className="w-full lg:w-1/3 px-4 mb-24 lg:mb-0">
            <h3 className="font-heading text-5xl sm:text-7xl text-white mb-8">
              Sign up to Suncealand now
            </h3>
            <p className="text-white">Be the first to get updates!</p>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="max-w-md xl:max-w-2xl 2xl:max-w-none mx-auto pt-16 pb-14 px-8 md:px-14 bg-gray-800 rounded-3xl">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2 mb-8">
                  <div className="w-full xl:w-1/2 px-2 mb-4 xl:mb-0">
                    <label className="block mb-5 text-xs font-medium text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-white px-8 py-6 text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg"
                    />
                  </div>
                  <div className="w-full xl:w-1/2 px-2">
                    <label className="block mb-5 text-xs font-medium text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full bg-white px-8 py-6 text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-block h-16 mb-8 w-full sm:w-44 rounded bg-white"
                  >
                    <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                      <div className="flex h-full w-full items-center justify-center bg-black border-2 border-white rounded">
                        {loading ? (
                          <div className="w-6 h-6 border-4 border-t-white border-gray-300 rounded-full animate-spin"></div>
                        ) : (
                          <span className="text-base font-semibold text-white uppercase">
                            Sign up for Waitlist
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
