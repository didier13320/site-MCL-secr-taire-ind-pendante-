import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function MarieChristineSite() {
  return (
    <div className="min-h-screen bg-[#f8f1e4] text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* LOGO MCL */}
            <div className="flex justify-center md:justify-start mb-10">
              <div className="leading-none select-none text-center md:text-left">
                <div
                  className="text-5xl md:text-7xl text-amber-900"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    letterSpacing: "0.04em",
                  }}
                >
                  MCL
                </div>
                <div
                  className="text-2xl md:text-3xl text-amber-800 mt-2"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    letterSpacing: "0.05em",
                  }}
                >
                  secrétaire indépendante
                </div>
              </div>
            </div>

            <h1
              className="text-5xl md:text-7xl mb-6 text-amber-900 text-center md:text-left"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Marie-Christine Lassagne
            </h1>

            <p className="text-lg text-amber-900/80 mb-10">
              J’accompagne les professionnels et les particuliers dans leur gestion administrative avec rigueur, discrétion et efficacité.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="tel:0609207430"
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button className="rounded-2xl px-6 py-3 text-lg shadow-lg bg-amber-600 hover:bg-amber-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  06 09 20 74 30
                </Button>
              </motion.a>

              <motion.a
                href="mailto:mclassagne33@gmail.com"
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outline"
                  className="rounded-2xl px-6 py-3 text-lg border-amber-600 text-amber-700 hover:bg-amber-100"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  mclassagne33@gmail.com
                </Button>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="/marie-christine.jpg"
              alt="Marie-Christine Lassagne"
              className="w-80 md:w-[420px] rounded-[2rem] shadow-2xl object-cover border-4 border-[#e6cfa7]"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES PROFESSIONNELS */}
      <section className="py-24 bg-[#f1e6d2] px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-amber-900 font-serif mb-4">
            Services aux professionnels
          </h2>
          <p className="text-amber-800 text-lg">
            Des prestations adaptées à votre activité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Gestion administrative",
              desc: "Traitement du courrier, organisation, classement, suivi des dossiers.",
            },
            {
              title: "Saisie & mise en page",
              desc: "Rédaction, correction, création de documents professionnels.",
            },
            {
              title: "Suivi clients & facturation",
              desc: "Devis, factures, relances et gestion administrative courante.",
            },
          ].map((service, index) => (
            <motion.div
              key={`pro-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl shadow-xl border border-[#e6cfa7] bg-white/70">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-amber-800 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-amber-900/80">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES PARTICULIERS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-amber-900 font-serif mb-4">
            Services aux particuliers
          </h2>
          <p className="text-amber-800 text-lg">
            Un accompagnement personnalisé pour vos démarches
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Aide aux démarches",
              desc: "Constitution et suivi de dossiers administratifs.",
            },
            {
              title: "Courriers officiels",
              desc: "Rédaction et mise en forme de vos documents personnels.",
            },
            {
              title: "Organisation",
              desc: "Tri et classement de vos documents administratifs.",
            },
          ].map((service, index) => (
            <motion.div
              key={`part-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl shadow-xl border border-[#e6cfa7] bg-[#fff8ed]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-amber-800 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-amber-900/80">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION AVIS CLIENTS */}
      <section className="py-20 bg-[#f3e8d7] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-amber-900 font-serif mb-6">
            Laissez votre avis
          </h2>
          <p className="text-amber-800 mb-8">
            Votre retour est précieux. Scannez le QR code pour laisser un avis.
          </p>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://google.com"
            alt="QR Code pour laisser un avis"
            className="mx-auto rounded-xl shadow-lg border-4 border-[#e6cfa7]"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#a67c52] py-8 text-center text-sm text-white">
        <p>
          © {new Date().getFullYear()}
        </p>
        <p className="mt-2">SIRET : 999 751 340</p>
        <p className="mt-2">
          <a
            href="mailto:mclassagne33@gmail.com"
            className="underline hover:text-white"
          >
            mclassagne33@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
