import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/types/types';
import { ClipLoader } from 'react-spinners';

const ContactForm = () => {


  const {
    handleSubmit,
    register,
    formState: { isLoading, isSubmitSuccessful, errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handleForm = (data: z.infer<typeof contactSchema>) => {
    console.log(data);
  };


  return (
    <div>

      <form onSubmit={handleSubmit(handleForm)}>
              <h3>Get in touch</h3>
              <div className="contact-form">
                <div className="input-control">
                  <input
                    type="text"
                    name="name"
                    {...register}
                    placeholder="Your Name"
                  />
                  <p className="error-message">{errors.name?.message}</p>
                </div>
                <div className="input-control">
                  <input
                    type="text"
                    name="email"
                    {...register}
                    placeholder="Your Email"
                  />
                  <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className="input-control">
                  <textarea
                    {...register}
                    placeholder="Message"
                    name="message"
                  ></textarea>
                  <p className="error-message">{errors.message?.message}</p>
                </div>

                {isSubmitSuccessful ? (
                  ''
                ) : (
                  <button className="btn-primary">
                    {isLoading ? <ClipLoader /> : 'Get in touch'}
                  </button>
                )}
              </div>
            </form>

    </div>
  )
}

export default ContactForm