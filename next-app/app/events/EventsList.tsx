"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "./page.css";

export default function EventsList() {
  return (
    <motion.section
      className="events"
      style={{ backgroundColor: "#FFFFFF", color: "#2F3E34" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="container"
        style={{ maxWidth: 960, margin: "0 auto", padding: "40px 16px 80px" }}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="text-center mb-4"
          style={{ fontSize: 32, fontWeight: 700 }}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          イベント
        </motion.h1>
        <motion.p
          className="text-center text-secondary mb-5"
          style={{ fontSize: 14 }}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          バンブーファームで開催しているイベントのご案内です。
        </motion.p>

        <div className="row g-4">
          {/* みそ作り体験 */}
          <motion.div
            className="col-12 col-md-6 col-lg-3"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div
              className="h-100 d-flex flex-column"
              style={{ borderRadius: 4 }}
            >
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: 4,
                  height: 160,
                  marginBottom: 8,
                }}
              />
              <h2
                className="mb-1"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#2F3E34",
                }}
              >
                みそ作り体験
              </h2>
              <p
                className="mb-1"
                style={{ fontSize: 12, color: "#777777" }}
              >
                作成日：2024.12.23
              </p>
              <div className="mt-2">
                <Link
                  href="/events/make-miso"
                  className="button text-center py-1 px-3 fw-bold rounded-3 text-decoration-none d-inline-block"
                  style={{ backgroundColor: "#C9A86A", color: "black", fontSize: 13 }}
                >
                  イベント詳細 →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 今後イベントが増えたら、ここにカードを追加 */}
        </div>
      </motion.div>
    </motion.section>
  );
}

