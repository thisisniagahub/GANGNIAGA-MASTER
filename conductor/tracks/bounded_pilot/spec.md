# Bounded Pilot (Knowledge Engine Scaffolding)
**Overview:**
Membina struktur asas pengekodan (scaffolding) untuk Bounded Pilot (GN-STR-PIL-001) yang menumpukan kepada satu fungsi: **Knowledge Retrieval**.

**Functional Requirements:**
1. Setup projek menggunakan Node.js & TypeScript.
2. Konfigurasi `docker-compose.yml` untuk pangkalan data (PostgreSQL/pgvector).
3. Membina endpoint asas untuk carian dokumen.
4. Integrasi dengan Repositori Blueprint sebagai sumber data.

**Non-Functional Requirements:**
- P95 latency mesti < 1.5 saat.
- Tiada simpanan PII/PHI (Data peribadi).
