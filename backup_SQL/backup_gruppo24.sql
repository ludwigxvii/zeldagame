--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: utente; Type: TABLE; Schema: public; Owner: www
--

CREATE TABLE public.utente (
    id integer NOT NULL,
    nome character varying(50),
    cognome character varying(50),
    username character varying(25),
    password character varying(100),
    score integer DEFAULT 0
);


ALTER TABLE public.utente OWNER TO www;

--
-- Name: utente_id_seq; Type: SEQUENCE; Schema: public; Owner: www
--

CREATE SEQUENCE public.utente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.utente_id_seq OWNER TO www;

--
-- Name: utente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: www
--

ALTER SEQUENCE public.utente_id_seq OWNED BY public.utente.id;


--
-- Name: utente id; Type: DEFAULT; Schema: public; Owner: www
--

ALTER TABLE ONLY public.utente ALTER COLUMN id SET DEFAULT nextval('public.utente_id_seq'::regclass);


--
-- Data for Name: utente; Type: TABLE DATA; Schema: public; Owner: www
--

COPY public.utente (id, nome, cognome, username, password, score) FROM stdin;
65	Luigi	D'Aniello	ludwig_vixi	$2y$10$fYyfLt4rmKIkLZD1FqRnBujv.uKvp.EMqBeWD4RH/I2sKlQUzFSqS	25
66	Mariantonietta	Pentangelo	mushroomary	$2y$10$SWTc/duPkOcO0usPj8/wQO1ERvsbS79naXK4BBARs6Mkb1qftRNE2	30
67	Nicola Alessandro	Galluzzo	nick	$2y$10$0ZyEDqVwxMtDuFOSOM1G.eMw1cHFnWktLK8SsiJkQMaWhHHXecFmS	27
68	Guido	Galdi	guido	$2y$10$6RQLgzSHLJD1TKd6x2DO9.NAi4JZy9VKRpLUuiwN/Gu67ieuHpDpu	27
\.


--
-- Name: utente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: www
--

SELECT pg_catalog.setval('public.utente_id_seq', 68, true);


--
-- Name: utente utente_pkey; Type: CONSTRAINT; Schema: public; Owner: www
--

ALTER TABLE ONLY public.utente
    ADD CONSTRAINT utente_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

