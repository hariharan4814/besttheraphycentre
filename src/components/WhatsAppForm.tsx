import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    service: z.string({
        required_error: "Please select a service.",
    }),
    message: z.string().optional(),
});

const WhatsAppForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const text = `*New Consultation Request*%0A%0A*Name:* ${values.name}%0A*Phone:* ${values.phone}%0A*Service:* ${values.service}%0A*Message:* ${values.message || "N/A"}`;
        window.open(`https://wa.me/919994907341?text=${text}`, "_blank");
    }

    return (
        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-healing-gradient flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Quick Consultation</h3>
                    <p className="text-sm text-muted-foreground">Send us a direct WhatsApp message</p>
                </div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field} className="bg-background" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="+91 999 999 9999" {...field} className="bg-background" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Interested Service</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Tera Care Therapy">Tera Care Therapy</SelectItem>
                                        <SelectItem value="Acupuncture">Acupuncture</SelectItem>
                                        <SelectItem value="Hydra Facial">Hydra Facial</SelectItem>
                                        <SelectItem value="Beauty Therapy">Beauty Therapy</SelectItem>
                                        <SelectItem value="Wellness Program">Wellness Program</SelectItem>
                                        <SelectItem value="Nutrition">Nutrition Guidance</SelectItem>
                                        <SelectItem value="Counseling">Counseling</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message (Optional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us about your health concern..."
                                        className="resize-none bg-background"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send to WhatsApp
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default WhatsAppForm;
