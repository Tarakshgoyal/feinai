'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface EmailForm {
  email: string;
}

const EmailSignup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EmailForm>();
  const { toast } = useToast();
  const router=useRouter();

  const onSubmit = async (data: EmailForm) => {
    try {
      const res = await fetch("http://localhost:80/api/v1/join-waitlist/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: data.email
        })
      });

      const res_json = await res.json();

      if (res_json["status"] != "ok")
      {
        let error_text = "Something went wrong. Please try again.";

        if ("error" in res_json) {
          error_text = res_json["error"];
        }

        console.log(error_text)

        toast({
          title: "Error",
          description: error_text,
          variant: "destructive",
        });

        return
      }

      console.log('Email submitted:', data.email);
      setShowSuccess(true);
      reset();
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      router.push('/finance')
    } catch (error) {
      console.log('Error submitting email:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      router.push('/finance')
    }
  };

  const fadeVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-waiting-text/5">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the Waitlist</h2>
        </motion.div>

        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg mb-8 opacity-80">
            Be among the first to experience the future of financial intelligence.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          variants={fadeVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="flex-1 bg-waiting-bg border-waiting-text/30 text-waiting-text placeholder:text-waiting-text/50"
          />
          <Button
            type="submit"
            className="bg-waiting-text text-waiting-bg hover:bg-waiting-text/90 font-semibold px-8"
          >
            Join Waitlist
          </Button>
        </motion.form>

        {errors.email && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="text-red-400 text-sm mt-2"
          >
            {errors.email.message}
          </motion.p>
        )}
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-waiting-bg border-waiting-text/30 text-waiting-text">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">🎉 Congratulations!</DialogTitle>
            <DialogDescription className="text-waiting-text/80 text-center">
              You&apos;ve successfully joined our waitlist! We&apos;ll notify you as soon as FEIN AI is ready to revolutionize your financial journey.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EmailSignup;
