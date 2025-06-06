'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface SurveyForm {
  currentFinancialTool: string;
  primaryGoal: string;
  experienceLevel: string;
  mostImportantFeature: string;
}

const Survey = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm<SurveyForm>();
  const { toast } = useToast();

  const onSubmit = async (data: SurveyForm) => {
    try {
      console.log('Survey submitted:', data);
      setSubmitted(true);
      reset();

      toast({
        title: "Thank you!",
        description: "Your feedback helps us build a better product.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <section id="survey" className="py-20 px-6 bg-waiting-text/5">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-[#ddf1a5] font-bold mb-4">Thank You! 🙏</h2>
            <p className="text-lg text-[#ddf1a5] opacity-80">
              Your feedback is invaluable in helping us create the perfect financial AI companion.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="survey" className="py-20 text-[#ddf1a5] px-6 bg-waiting-text/5">
      <div className="container text-[#ddf1a5] mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Card className="bg-waiting-bg border-waiting-text/30">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-waiting-text text-[#ddf1a5]">Help Us Build Better</CardTitle>
              <p className="text-waiting-text/80 text-[#ddf1a5]">
                Answer a few quick questions to help shape FEIN AI's features.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-waiting-text mb-2 text-[#ddf1a5] font-medium">
                    What financial tool do you currently use most?
                  </label>
                  <select
                    {...register('currentFinancialTool', { required: true })}
                    className="w-full p-3 bg-waiting-bg border border-waiting-text/30 bg-[#0f0f0f] text-[#ddf1a5] rounded-md text-waiting-text"
                  >
                    <option value="">Select an option</option>
                    <option value="spreadsheets">Spreadsheets</option>
                    <option value="banking-app">Banking App</option>
                    <option value="budgeting-app">Budgeting App (Mint, YNAB, etc.)</option>
                    <option value="investment-app">Investment App</option>
                    <option value="nothing">Nothing specific</option>
                  </select>
                </div>

                <div>
                  <label className="block text-waiting-text text-[#ddf1a5] mb-2 font-medium">
                    What's your primary financial goal?
                  </label>
                  <select
                    {...register('primaryGoal', { required: true })}
                    className="w-full p-3 bg-waiting-bg border border-waiting-text/30 bg-[#0f0f0f] text-[#ddf1a5] rounded-md text-waiting-text"
                  >
                    <option value="">Select an option</option>
                    <option value="save-money">Save more money</option>
                    <option value="invest-better">Invest more effectively</option>
                    <option value="budget-control">Better budget control</option>
                    <option value="retirement-planning">Retirement planning</option>
                    <option value="debt-reduction">Reduce debt</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#ddf1a5] text-waiting-text mb-2 font-medium">
                    How would you rate your financial experience?
                  </label>
                  <select
                    {...register('experienceLevel', { required: true })}
                    className="w-full p-3 bg-waiting-bg border border-waiting-text/30 rounded-md bg-[#0f0f0f] text-[#ddf1a5] text-waiting-text"
                  >
                    <option value="">Select an option</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>

                <div>
                  <label className="block text-waiting-text text-[#ddf1a5] mb-2 font-medium">
                    Which feature excites you most about AI in finance?
                  </label>
                  <select
                    {...register('mostImportantFeature', { required: true })}
                    className="w-full p-3 bg-waiting-bg border border-waiting-text/30 rounded-md bg-[#0f0f0f] text-[#ddf1a5] text-waiting-text"
                  >
                    <option value="">Select an option</option>
                    <option value="personalized-advice">Personalized financial advice</option>
                    <option value="automated-investing">Automated investing</option>
                    <option value="expense-tracking">Smart expense tracking</option>
                    <option value="tax-optimization">Tax optimization</option>
                    <option value="risk-assessment">Risk assessment</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-waiting-text text-[#0f0f0f] text-waiting-bg bg-[#ddf1a5] hover:bg-waiting-text/90 font-semibold py-3"
                >
                  Submit Survey
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Survey;
