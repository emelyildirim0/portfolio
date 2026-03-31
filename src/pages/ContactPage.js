import "../css/Contact2.css";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage({ t }) {
  const email = "info@emelyildirim.com";
  const linkedIn = "https://linkedin.com/in/emelyildirim";
  const github = "https://github.com/emelyildirim0";
  const subject = encodeURIComponent("İş birliği / İletişim");
  const body = encodeURIComponent(
    "Merhaba Emel,\n\nKısaca kendimden ve ihtiyacım/konumdan bahsedeyim:\n- \n\nTeşekkürler."
  );

  const env = useMemo(() => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const enabled = Boolean(serviceId && templateId && publicKey);
    return { enabled, serviceId, templateId, publicKey };
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function onSubmit(e) {
    e.preventDefault();
    if (!env.enabled) return;
    setStatus("sending");
    try {
      await emailjs.send(
        env.serviceId,
        env.templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        { publicKey: env.publicKey }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="container contact">
      <section className="glass section stack-24">
        <div className="section-head">
          <h1 className="display">{t.contactTitle}</h1>
          <p className="muted">{t.contactLead}</p>
        </div>

        <div className="contact-card">
          <div className="contact-grid">
            <div className="contact-col">
              <div className="contact-row">
                <div className="muted">{t.contactEmailLabel}</div>
                <div className="contact-email">{email}</div>
              </div>

              <div className="contact-row contact-social">
                <div className="muted">{t.contactLinksLabel}</div>
                <div className="contact-actions">
                  <a
                    className="btn"
                    href={linkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a className="btn" href={github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="contact-actions">
                <a
                  className="btn"
                  href={`mailto:${email}?subject=${subject}&body=${body}`}
                >
                  mailto
                </a>
              </div>
              <p className="muted contact-foot">
                {t.contactNote}
              </p>
            </div>

            <div className="contact-col">
              <div className="contact-form-head">
                <div className="contact-form-title">{t.contactFormTitle}</div>
                {!env.enabled && (
                  <div className="muted contact-form-hint">
                    {t.contactFormEnvHint}
                  </div>
                )}
              </div>

              <form className="contact-form" onSubmit={onSubmit}>
                <label className="field">
                  <span className="muted">{t.formName}</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    placeholder={t.formNamePh}
                    required
                    autoComplete="name"
                  />
                </label>

                <label className="field">
                  <span className="muted">{t.formEmail}</span>
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, email: e.target.value }))
                    }
                    type="email"
                    placeholder={t.formEmailPh}
                    required
                    autoComplete="email"
                  />
                </label>

                <label className="field">
                  <span className="muted">{t.formMessage}</span>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, message: e.target.value }))
                    }
                    placeholder={t.formMessagePh}
                    required
                    rows={6}
                  />
                </label>

                <button
                  className="btn primary"
                  type="submit"
                  disabled={!env.enabled || status === "sending"}
                >
                  {status === "sending" ? t.formSending : t.formSend}
                </button>

                {status === "success" && (
                  <div className="status ok">{t.formSuccess}</div>
                )}
                {status === "error" && (
                  <div className="status err">{t.formError}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

