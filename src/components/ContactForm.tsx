"use client";

import { useState } from "react";
import type { ContactSection } from "../types/home";
import type { ServiceItem } from "../types/home";


type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    services: string[];
    message: string;
};

export function ContactForm({ contact, services }: { contact: ContactSection, services: ServiceItem[] }) {
    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        services: [],
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const toggleService = (option: string) => {
        setForm((current) => {
            const exists = current.services.includes(option);
            return {
                ...current,
                services: exists
                    ? current.services.filter((service) => service !== option)
                    : [...current.services, option],
            };
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setIsSending(true);

        const payload = {
            ...form,
            service: selectedTitle,
        };

        console.log("DEBUG: contact form submit triggered", payload);

        try {
            const resp = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await resp.json().catch(() => ({}));
            console.log("DEBUG: contact API response", data, "status", resp.status);

            if (!resp.ok) {
                setError(data?.error || 'Failed to send request');
                return;
            }

            setSubmitted(true);
        } catch (err) {
            console.error('DEBUG: contact API error', err);
            setError('An unexpected error occurred. Please try again later.');
        } finally {
            setIsSending(false);
        }
    };

    const [selectedTitle, setSelectedTitle] = useState(services[0]?.title ?? "");

    const selectedService = services.find((service) => service.title === selectedTitle) ?? services[0];


    return (
        <div className="space-y-6 rounded-[2rem] bg-zinc-50 p-8 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[.25em] text-emerald-700 dark:text-emerald-300">Get in touch</p>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">{contact.heading}</h2>
                <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">{contact.description}</p>
            </div>

            <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        First Name
                        <input
                            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                            type="text"
                            required
                            value={form.firstName}
                            onChange={(event) => setForm({ ...form, firstName: event.target.value })}
                        />
                    </label>
                    <label className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        Last Name
                        <input
                            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                            type="text"
                            required
                            value={form.lastName}
                            onChange={(event) => setForm({ ...form, lastName: event.target.value })}
                        />
                    </label>
                    <label className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        Email
                        <input
                            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                            type="email"
                            required
                            value={form.email}
                            onChange={(event) => setForm({ ...form, email: event.target.value })}
                        />
                    </label>
                    <label className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        Phone
                        <input
                            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(event) => setForm({ ...form, phone: event.target.value })}
                        />
                    </label>
                </div>

                <fieldset className="space-y-3 rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                    <legend className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Requested services</legend>
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
                </fieldset>



                <label className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    Additional details (optional)
                    <textarea
                        className="min-h-[120px] w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                        value={form.message}
                        onChange={(event) => setForm({ ...form, message: event.target.value })}
                    />
                </label>

                <button
                    type="submit"
                    disabled={isSending}
                    aria-busy={isSending}
                    className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
                >
                    {isSending ? 'Sending...' : 'Submit request'}
                </button>
            </form>

            {error ? (
                <div className="rounded-3xl bg-red-100 p-4 text-sm text-red-900 dark:bg-red-900/20 dark:text-red-100">
                    {error}
                </div>
            ) : null}

            {submitted ? (
                <div className="rounded-3xl bg-emerald-100 p-4 text-sm text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-100">
                    Thanks! Your quote request was received.
                </div>
            ) : null}
        </div>
    );
}
