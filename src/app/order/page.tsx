
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/lib/services";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Loader2, FileUp, Lock, CheckCircle, ShieldCheck } from "lucide-react";

const orderFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string({ required_error: "Please select a service." }),
  projectTitle: z.string().min(5, { message: "Project title must be at least 5 characters." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  files: z.any().optional(),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

export default function OrderPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      projectTitle: "",
      description: "",
    },
  });

  async function onSubmit(data: OrderFormValues) {
    setIsSubmitting(true);
    console.log(data);
    // Simulate API call for form submission and file upload
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setIsSubmitting(false);
    setShowConfirmation(true);
    form.reset();
  }

  return (
    <>
      <div className="bg-muted/40">
        <div className="container py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Secure Your Invention</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Complete the secure form below to begin the patent drawing process. Our team is ready to turn your concept into compliant, high-quality illustrations.
                </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Project Details</CardTitle>
                        <CardDescription>
                            Please provide as much detail as possible for an accurate quote.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <fieldset className="space-y-6 p-4 border rounded-lg">
                                <legend className="-ml-1 px-1 text-sm font-medium">Your Information</legend>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                            <Input type="email" placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                </div>
                            </fieldset>

                             <fieldset className="space-y-6 p-4 border rounded-lg">
                                <legend className="-ml-1 px-1 text-sm font-medium">Invention Details</legend>
                                <FormField
                                    control={form.control}
                                    name="service"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Service Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a service for your project" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {services.map((service) => (
                                                <SelectItem key={service.slug} value={service.slug}>
                                                {service.title}
                                                </SelectItem>
                                            ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="projectTitle"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Project Title / Invention Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Automated Personal Drone" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Project Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                            placeholder="Describe your invention, its function, and key components. The more detail, the better!"
                                            rows={8}
                                            {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="files"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Upload Files</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                 <FileUp className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                 <Input type="file" multiple className="pl-10" onChange={(e) => field.onChange(e.target.files)} />
                                            </div>
                                        </FormControl>
                                        <FormDescription>
                                            Upload sketches, 3D models, or other reference materials (PDF, JPG, PNG, STEP, etc.).
                                        </FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                             </fieldset>
                            
                            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting Securely...
                                </>
                            ) : (
                                'Submit Project for Review'
                            )}
                            </Button>
                        </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
             <div className="lg:col-span-1 space-y-8">
                 <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-xl text-primary">
                            <ShieldCheck />
                            Secure & Confidential
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <Lock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                            <p className="text-muted-foreground">All submissions are encrypted and handled with the utmost confidentiality.</p>
                        </div>
                         <div className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                            <p className="text-muted-foreground">We gladly sign Non-Disclosure Agreements (NDAs) before you share sensitive details.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                            <p className="text-muted-foreground">Our team of experts will conduct a thorough review of your materials.</p>
                        </div>
                         <div className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                            <p className="text-muted-foreground">You will receive a no-obligation quote and timeline within 1 business day.</p>
                        </div>
                    </CardContent>
                 </Card>
            </div>
          </div>
        </div>
      </div>

      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-2xl">Project Submitted Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for entrusting us with your invention. Our team has received your project details and will contact you via email within 1-2 business days to confirm the details and provide a quote.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Link href="/">Return to Home</Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
