"use client";

import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {ArrowRight, Code, Cpu, Rocket} from "lucide-react";
import {useState} from "react";

// Data for our services/products - easier to manage
const services = [
    {
        icon: <Cpu className="h-8 w-8 text-indigo-400"/>,
        title: "Platform Engineering",
        desc: "We architect and build robust, scalable software platforms that form the backbone of modern applications.",
    },
    {
        icon: <Rocket className="h-8 w-8 text-indigo-400"/>,
        title: "Product Development",
        desc: "From idea to launch, we're crafting innovative products designed to simplify complex workflows and enhance daily productivity.",
    },
    {
        icon: <Code className="h-8 w-8 text-indigo-400"/>,
        title: "Bespoke Solutions",
        desc: "Leveraging our deep engineering expertise to solve unique challenges with custom-built software solutions.",
    },
];

export default function Home() {

    const [form, setForm] = useState({
        data: {
            email: '',
        },
        message: {
            success: '',
            error: ''
        },
        processing: false
    });

    const MAX_LENGTH = 190;

    const submit = async (e: any) => {
        e.preventDefault();

        const validate = () => {
            const {email} = form.data;
            if (!email.trim()) return 'Email is required';
            if (!/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email address like your.email@example.com';
            if (email.length > MAX_LENGTH) return 'Email must not exceed 190 characters';
            return '';

        }

        const errorMessage = validate();

        console.log(errorMessage)
        if (errorMessage) {
            setForm(prev => ({
                ...prev,
                message: {...prev.message, success: '', error: errorMessage}
            }));
            return;
        } else {
            setForm(prev => ({
                ...prev,
                processing: true
            }));
        }

        const formData = new FormData();
        Object.entries(form.data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch('/get-in-touch', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setForm({
                    data: {email: ''},
                    message: {success: 'Thank you for contacting. We will get back to you soon.', error: ''},
                    processing: false
                });
            } else {
                setForm(prev => ({
                    ...prev,
                    message: {...prev.message, success: '', error: 'Something went wrong. Please try again later.'},
                    processing: false
                }));
            }
        } catch (error) {
            console.error('Error:', error);
            setForm(prev => ({
                ...prev,
                message: {...prev.message, success: '', error: 'Network error. Please try again.'},
                processing: false
            }));
        }
    }

    return (
        <div
            className="min-h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">

            <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-sm z-10">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <h2 className="text-xl font-bold">Throtik</h2>
                    <Link href="https://mitesh.throtik.com"
                          className="text-sm font-medium hover:text-indigo-400 transition-colors">
                        Contact Us
                    </Link>
                </div>
            </header>

            <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-4xl sm:text-6xl p-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
                        Engineering the Future of Software
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl">
                        We are a collective of skilled engineers building high-impact platform software and products
                        that empower users and simplify daily routines.
                    </p>
                </motion.div>

                <form onSubmit={submit}>
                    <div className="mt-10 mb-2">
                        {form.message.success && (
                            <div className="text-green-800">
                                {form.message.success}
                            </div>
                        )}

                        {form.message.error && (
                            <div className="text-red-800">
                                {form.message.error}
                            </div>
                        )}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg"
                    >
                        <input
                            type="text"
                            placeholder="your.email@example.com"
                            value={form.data.email}
                            onChange={(e) => {
                                setForm({ ...form, data: { ...form.data, email: e.target.value } })
                            }}
                            className="flex-1 px-5 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-500"
                        />
                        <Button
                            size="lg"
                            type="submit"
                            className="whitespace-nowrap w-full sm:w-auto"
                        >
                            Get Notified
                        </Button>
                    </motion.div>
                </form>

                <p className="mt-4 text-xs text-slate-500">
                    Be the first to know when we launch. No spam, we promise.
                </p>
            </section>

            <section className="px-6 py-24 max-w-6xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.6}}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">What {"We're"} Building</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-400">
                        Our focus is on creating tools that are not just powerful, but also intuitive and impactful.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: idx * 0.2, duration: 0.6}}
                        >
                            <Card
                                className="bg-slate-800/50 border border-slate-700 shadow-lg hover:border-indigo-500 transition-all h-full">
                                <CardContent className="p-8">
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold text-slate-700">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-slate-400">{service.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Call to Action */}
            <section className="px-6 py-24 text-center">
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.6}}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">Ready to Shape the Future?</h2>
                    <p className="mt-4 text-lg text-slate-400">
                        {"We're"} looking for passionate individuals and forward-thinking partners. {"Let's"} connect and
                        build something remarkable together.
                    </p>
                    <div className="mt-8">
                        <Link href="https://mitesh.throtik.com"
                              className="inline-flex items-center gap-2 px-8 py-4 text-lg rounded-lg shadow-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-transform hover:scale-105">
                            {"Let's"} Talk <ArrowRight className="h-5 w-5"/>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Simple Footer */}
            <footer className="border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Throtik. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}