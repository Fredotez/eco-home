"use client";

import Image from "next/image";
import { useState } from "react";
import type { ServiceItem } from "../types/home";

export function ServiceCard({ services }: { services: ServiceItem[] }) {
    const [selectedTitle, setSelectedTitle] = useState(services[0]?.title ?? "");

    const selectedService = services.find((service) => service.title === selectedTitle) ?? services[0];

    return (
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
                <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <label htmlFor="service-select" className="mb-3 block text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">
                        Select a service
                    </label>
                    <div className="relative">
                        <select
                            id="service-select"
                            value={selectedService?.title ?? ""}
                            onChange={(event) => setSelectedTitle(event.target.value)}
                            className="w-full appearance-none rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 pr-12 text-base font-medium text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-emerald-900"
                        >
                            {services.map((service) => (
                                <option key={service.title} value={service.title}>
                                    {service.title}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-zinc-500 dark:text-zinc-400">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                                <path d="M5.25 7.25a.75.75 0 0 1 1.06 0L10 11.94l3.69-4.69a.75.75 0 1 1 1.06 1.06l-4.22 5.36a.75.75 0 0 1-1.06 0l-4.22-5.36a.75.75 0 0 1 0-1.06Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm dark:border-zinc-800">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Service overview</p>
                    <h3 className="mt-3 text-2xl font-semibold">{selectedService?.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{selectedService?.description}</p>
                </div>
            </div>

            <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="relative h-72 overflow-hidden sm:h-80">
                    {selectedService ? (
                        <Image
                            src={selectedService.image}
                            alt={selectedService.alt}
                            width={900}
                            height={700}
                            className="h-full w-full object-cover"
                        />
                    ) : null}
                </div>
                <div className="space-y-6 p-6 sm:p-8">
                    <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                        Tailored support
                    </div>
                    <div className="space-y-3">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">{selectedService?.title}</h3>
                            {selectedService?.priceEstimate ? (
                                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                                    {selectedService.priceEstimate}
                                </span>
                            ) : null}
                        </div>
                        <p className="text-base leading-8 text-zinc-600 dark:text-zinc-300">{selectedService?.description}</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">
                            What&apos;s included
                        </p>
                        <ul className="space-y-2 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                            {selectedService?.offerings.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    );
}
