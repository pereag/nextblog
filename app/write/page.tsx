'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import PageContainer from '@/components/PageContainer';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const requiredMessage = 'This field is required';

const formSchema = z.object({
  title: z.string().min(1, {
    message: requiredMessage,
  }),
  blurb: z.string().min(1, {
    message: requiredMessage,
  }),
  content: z.string().min(1, {
    message: requiredMessage,
  }),
});

export default function WritePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      blurb: '',
      content: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <PageContainer>
      <main className='p-4'>
        <div className='mb-8'>
          <h2 className='font-semibold'>Write a post</h2>
          <p className='text-sm font-normal text-gray-600'>
            Everything can be updated after submission.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='New framework to enhance design comprehension'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='blurb'
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Blurb</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Be up to date with this very new framework !'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Once uppon a time in the marvelous world of code is born this awesome framework...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='mt-12 flex justify-end gap-2'>
              <Button>Save draft</Button>
              <Button type='submit'>Create</Button>
            </div>
          </form>
        </Form>
      </main>
    </PageContainer>
  );
}
