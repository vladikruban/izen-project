"use client";

import { useState } from "react";

export default function Contacts() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/vladruban.rv@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMessage("Что-то пошло не так. Попробуйте еще раз.");
      }
    } catch (error) {
      setErrorMessage("Ошибка сети. Проверьте интернет.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#101011] py-20 relative" id="contacts">
      <div className="container mx-auto px-6 max-w-2xl">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Контакты</h2>
          <p className="text-gray-400">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="_subject" value="Новая заявка с сайта IZEN!" />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Имя
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={isSubmitting}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#286ca0] transition-colors disabled:opacity-50"
              placeholder="Ваше имя"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={isSubmitting}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#286ca0] transition-colors disabled:opacity-50"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Сообщение
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              disabled={isSubmitting}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#286ca0] transition-colors resize-none disabled:opacity-50"
              placeholder="Ваш вопрос или комментарий..."
            ></textarea>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-bold py-4 rounded-lg transition-all duration-300 flex justify-center items-center ${
              isSubmitting 
                ? "bg-gray-700 cursor-not-allowed text-gray-400" 
                : "bg-[#286ca0] hover:bg-[#1a4f7a] text-white"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Отправка...
              </>
            ) : (
              "Отправить сообщение"
            )}
          </button>
        </form>

        <div 
          className={`fixed bottom-8 right-8 z-50 transform transition-all duration-500 ${
            isSuccess ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4">
            <div className="bg-white/20 p-2 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold">Спасибо!</h4>
              <p className="text-sm text-green-100">Мы скоро с Вами свяжемся.</p>
            </div>
            <button 
              onClick={() => setIsSuccess(false)}
              className="ml-4 text-green-200 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}