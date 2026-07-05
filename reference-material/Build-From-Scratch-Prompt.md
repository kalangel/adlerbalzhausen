# Gasthof Adler Balzhausen — Промпт для пересборки сайта с нуля (2026)

Полный build-бриф с реальным контентом. Отдать любому AI-билдеру / разработчику / Framer/Webflow/Next.js. Всё содержимое ниже — настоящее, взято с текущего сайта; менять только оформление и структуру, тексты и данные сохранить.

---

## ГОТОВЫЙ ПРОМПТ (копировать целиком)

```
Построй современный сайт (2026) для традиционного баварско-швабского ресторана «Gasthof Adler Balzhausen» (семья Greiner, 4-е поколение). Стек на выбор: Next.js + Tailwind (предпочтительно) или Webflow/Framer. Требования: mobile-first, быстрый (Core Web Vitals в зелёной зоне), доступный (WCAG AA), SEO-оптимизированный, DSGVO-совместимый. Язык сайта — немецкий.

═══════════════════════════════════
ДИЗАЙН-СИСТЕМА
═══════════════════════════════════
Характер: тёплый, традиционный, рустик, но чистый и современный. Не тёмный «деревенский» шаблон, а светлый премиум с рустик-акцентами.
- Цвета: акцент бордо/винный #7A1F2B; тёмное дерево #3B2A1E; кремовый фон #F7F1E6; золотой акцент #C9A24B; основной текст #2A2320.
- Шрифты: заголовки — Playfair Display или Cormorant (serif); текст — Inter или Source Sans. Без рукописных шрифтов.
- Ширина контента ≤1200px, крупные отступы, много воздуха, скругления 12–16px, мягкие тени.
- Кнопки: первичная — заливка #7A1F2B, белый текст; вторичная — контур. Одинаковый стиль везде.
- Фото: все в WebP, lazy-load, крупные, качественные. Секции full-width с фоновыми фото.
- Анимации: сдержанное появление при скролле, мягкий hover. Без перегруза.
- Иконки: линейный набор (Lucide/Feather).

═══════════════════════════════════
ГЛОБАЛЬНЫЕ ЭЛЕМЕНТЫ
═══════════════════════════════════
ЛОГОТИП: орёл «Adler», прозрачный SVG/PNG (светлая и тёмная версии).

ХЕДЕР (sticky, уменьшается при скролле):
Логотип | Меню: Home · Räumlichkeiten [выпадающее: Gaststube, Saal, Bistro Amnesia, Kegelbahn] · Speisekarte · Aktuelles · Galerie · Kontakt | справа: кнопка «Tisch reservieren» + кликабельный телефон +49 (0)8281 4890.
Мобильный: бургер-меню + липкая нижняя панель: Anrufen · Reservieren · Route.

ФУТЕР (единый, 4 колонки):
1) Контакты: Gasthof Adler, St.-Leonhard-Straße 1, 86483 Balzhausen; Tel. +49 (0)8281 4890.
2) Öffnungszeiten (см. ниже).
3) Быстрые ссылки (все страницы).
4) Соцсети (Facebook, Instagram — плейсхолдеры).
Низ: Impressum · Datenschutz · © 2026 Gasthof Adler Balzhausen. БЕЗ плашки IONOS.

ГЛОБАЛЬНО добавить: встроенную Google-карту, онлайн-бронирование стола, WhatsApp-кнопку, cookie-consent (opt-in), Schema.org Restaurant (адрес, гео, часы, телефон), уникальные meta title/description на каждой странице, alt-тексты, sitemap.xml, HTTPS.

ЧАСЫ РАБОТЫ (единый источник, устранить противоречия оригинала):
Öffnungszeiten:
  Montag — Ruhetag (geschlossen)
  Dienstag — 11:00–23:00
  Mittwoch — Ruhetag (geschlossen)
  Donnerstag — 11:00–23:00
  Freitag — 11:00–23:00
  Samstag — 11:00–23:00
  Sonntag — 11:00–23:00
Warme Küche: wochentags 18:30–22:30 Uhr; Sonntag 11:00–22:30 Uhr.

═══════════════════════════════════
СТРАНИЦЫ И КОНТЕНТ
═══════════════════════════════════

── HOME ──
Hero на весь экран (фото фасада/зала), заголовок «Gasthof Adler — Balzhausen», подзаголовок «Ländliche Gemütlichkeit in rustikalem Ambiente – seit vier Generationen», 2 CTA: «Tisch reservieren» + «Speisekarte ansehen».
Секция «Über uns» (текст оригинала):
«"Der Adler" blickt auf eine lange Geschichte zurück und wird heute in vierter Generation geführt. In unserem traditionsbewussten Gasthof erwartet Sie ländliche Gemütlichkeit in rustikalem Ambiente.
Für Feierlichkeiten und Tagungen aller Art sind unsere Gaststube und der Saal bestens geeignet. Unser großzügiger moderner Saal mit Bühne bietet Ihnen Platz für bis zu 400 Personen.
Für alle die gerne im Freien sitzen, empfehlen wir unsere kleine Hofterrasse direkt vor dem Haus.
Stolz sind wir, dass der Planer der Wieskirche, Abt Hyazinth Gassner, in unserem Haus geboren wurde.»
Отдельный блок-хайлайт про Abt Hyazinth Gassner / Wieskirche с фото исторической таблички.
Карточки-превью (ведут на страницы): Gaststube · Saal (до 400 чел.) · Bistro Amnesia · Kegelbahn.
Блок «Aktuelle Veranstaltungen» (ближайшее событие из Aktuelles).
Google-отзывы, фото-полоса, встроенная карта, финальный CTA («Fragen Sie nach unseren besonderen Veranstaltungen» → Kontakt).

── GASTSTUBE ──
Заголовок «Gaststube im Gasthof Adler Balzhausen», подзаголовок «"da gehen wir hin.."».
Текст: «Freuen Sie sich in gemütlich rustikaler Atmosphäre auf unsere gutbürgerliche Küche. Zu unserem Angebot gehören schwäbische Spezialitäten genauso wie weitere saisonale Leckerbissen aus der Region. Unser freundlicher Service und gepflegte Getränke aus Keller und Kühlschrank lassen keine Wünsche offen. Nehmen Sie sich eine kleine Auszeit und schauen Sie doch mal bei uns vorbei! Wir freuen uns auf Ihren Besuch. Familie Greiner»
Фотогалерея интерьера. CTA: «Zur Speisekarte» + «Tisch reservieren».

── SAAL (коммерческий приоритет — аренда) ──
Заголовок «Unser Saal», подзаголовок «Unser großer Saal mit Bühne».
Текст: «ist bestens für Hochzeiten, Tagungen, Veranstaltungen und private Feierlichkeiten und Anlässe aller Art geeignet. Der Saal ist variabel einsetzbar und bietet Platz von 50 bis 400 Personen, ganz wie Sie es wünschen.»
Факты-цифры: до 400 гостей · сцена (Bühne) · рассадка 50–400.
Карточки вариантов рассадки: Bankett / Theater / Konferenz.
Галерея мероприятий (Hochzeiten, Jubiläen, Tagungen, Geburtstage).
Форма запроса: дата, тип события, кол-во гостей, контакт → CTA «Saal anfragen».

── SPEISEKARTE ──
Заголовок «Unsere Speisekarte — Aus Küche und Keller».
Вступление: «Wir kochen mit erstklassigen Zutaten echte schwäbische Schmankerln. Dazu verwenden wir Fleisch von Schwein und Rind aus eigener Aufzucht. Alle übrigen Produkte kommen aus der heimischen Region. Probieren Sie Pfeffersteak, Schweinelendchen oder Zwiebelrostbraten, Sie werden die Frische schmecken! Mit feinen Kuchen - natürlich hausgebacken - verwöhnen wir Sie an den Wochenenden. Gerne sind wir auch mit unserem Catering-Service für Sie da!»
Якорная навигация по секциям. Табы: «Sonntag» / «Wochentags». Кнопка «Speisekarte als PDF». Пометки аллергенов. Строки: блюдо — описание — цена.

SUPPE
  Brät und Leberknödelsuppe — 6,00 €

HAUPTGERICHTE AM SONNTAG
  Hirschbraten (Spätzle, Kroketten, Gemüse) — 19,00 €
  Jägerbraten (Spätzle, Kroketten, Gemüse) — 15,00 €
  Burgunderbraten (Pfirsich, Preiselbeeren, Spätzle, Kroketten, Gemüse) — 17,00 €
  Gemischter Braten (Spätzle, Kroketten, Gemüse) — 16,50 €
  Spanferkelbraten (Spätzle, Kroketten, Gemüse) — 16,50 €
  Schweinelendchen (frische Champignon, Spätzle, Kroketten, Gemüse) — 18,00 €
  Pfeffersteak (Pommes frites, Gemüse) — 22,50 €
  Zwiebelrostbraten (Pommes frites, Gemüse) — 22,50 €
  Cordon Bleu (Pommes frites) — 16,50 €
  Schnitzel "Wiener Art" (Pommes frites) — 14,50 €
  Pariser Schnitzel (Ananas, Käse, Pommes frites) — 15,00 €
  Kässpätzle (Röstzwiebeln) — 11,00 €
  Bunter Salatteller (Hähnchennuggets) — 5,00 €

NACHTISCH
  Vanilleeis mit heißen Himbeeren und Sahne — 6,60 €
  Apfelküchle mit Vanilleeis und Sahne — 8,20 €
  Gemischtes Eis mit Sahne — 6,20 €

BIERE 0,5 L
  Autenrieder Pils — 3,90 €
  Autenrieder Dunkle Weisse — 3,90 €
  Autenrieder Leichte Weisse — 3,90 €
  Autenrieder Weisse — 3,90 €
  Autenrieder Urtyp Hell — 3,40 €
  Autenrieder Dunkel — 3,90 €
  Riegele Aechtes Dunkel — 4,00 €
  Lauterbacher Weizen — 4,00 €

BIERMISCHGETRÄNKE
  Radler 0,5 L — 3,40 €
  Cola-Weizen 0,5 L — 3,90 €
  Geißenmaß 1,0 L — 9,50 €
  Geißenhalbe 0,5 L — 5,00 €

ALKOHOLFREIE GETRÄNKE
  Saftschorle süß/sauer 0,5 L — 3,90 €
  Spezi 0,5 L — 3,40 €
  Fanta 0,25 L — 2,50 €
  Coca-Cola 0,5 L — 4,00 €
  Zitronen Limonade 0,5 L — 3,40 €
  Überkinger 0,5 L — 3,00 €

SÄFTE
  Orangensaft 0,5 L — 4,50 €
  Apfelsaft 0,25 L — 2,50 €
  Traubensaft 0,25 L — 2,50 €
  Orangensaft 0,25 L — 2,50 €

SCHOPPENWEINE WEISS
  Oberberger Bassgeige "Baden" trocken 0,25 L — 5,00 €
  Bacchus Kabinett lieblich 0,25 L — 5,00 €
  Württemberger Wein halbtrocken 0,25 L — 5,00 €
  Weinschorle süß/sauer 0,5 L — 4,50 €

SCHOPPENWEINE ROT
  Haberschlachter "Württemberger" halbtrocken 0,25 L — 5,00 €
  Merlot "Frankreich" trocken 0,25 L — 5,00 €
  Spätburgunder Weißherbst "Baden" rosé 0,25 L — 5,00 €

SEKTE
  Sekt trocken 0,7 L — 18,00 €
  Sekt halbtrocken 0,7 L — 17,00 €

SPEISEKARTE WOCHENTAGS
  Pfeffersteak (Pommes frites) — 22,50 €
  Schnitzel "Wiener Art" (Pommes frites) — 14,50 €
  Pariser Schnitzel (Ananas, Käse überbacken, Pommes frites) — 15,00 €
  Cordon Bleu (Pommes frites) — 16,50 €
  Toast "Hawaii" (Schinken, Ananas) — 10,00 €
  Currywurst (Pommes frites) — 10,00 €
  Warmer Leberkäse (Ei, Pommes frites) — 10,50 €
  Pommes frites und Salat — 9,50 €
  Salatplatte groß (Nuggets oder Kartoffeltaschen) — 12,50 €
  Bunter Beilagensalat — 5,00 €
  Schweizer Wurstsalat mit Brot — 9,50 €
  Wurstsalat mit Brot — 9,50 €
  Nachtisch – Vanilleeis mit heißen Himbeeren — 6,60 €
  Eierlikörbecher mit Sahne — 6,60 €
  Gemischtes Eis mit Sahne — 6,20 €
Примечание внизу: «Speisekarte für Sonntag Mittag wechselnde Gerichte, werktags kleinere Speisekarte. Angaben zu evtl. Zusatzstoffen erhalten Sie in unserem Lokal. Alle Preise inkl. Bedienung und MwSt.»

── BISTRO AMNESIA ──
Заголовок «Bistro Amnesia», подзаголовок «Feste feiern im Bistro Amnesia».
Текст: «Private Feierlichkeiten, Feste oder ein Jubiläum stehen an, doch der Platz in den eigenen Räumlichkeiten reicht nicht für alle Gäste? Für diese Situation bieten wir Ihnen die Lösung! Mieten Sie doch einfach unser hübsches Kellerlokal Bistro Amnesia und Sie haben die ideale Location um sich mit Familie, Freunden und Gästen zu treffen und gemütlich im „Privaten" zu feiern. Das Beste: Durch die professionelle, gastronomische Einrichtung, wie Theke, Kühlschrank, Anrichte usw. können Sie sich voll und ganz auf Ihren festlichen Anlass konzentrieren. Ganz nach Wunsch bieten wir Ihnen mehrere Möglichkeiten mit oder ohne Bewirtung. Die Konditionen und freien Termine nennen wir Ihnen gerne bei einem persönlichen Gespräch. Sie erreichen uns unter Telefon: 08281-4890 oder über unser Kontaktformular. Ihre Familie Greiner»
Блок «инклюзив» иконками: Theke, Kühlschrank, Anrichte, с/без обслуживания. Галерея. Форма запроса дат. CTA «Bistro anfragen».

── KEGELBAHN ──
Заголовок «Unsere hauseigene Kegelbahn», подзаголовок «Bundeskegelbahn».
Текст: «Für unsere sportlichen Gäste bieten wir 2 gut präparierte und gepflegte Bundeskegelbahnen. Gute Laune, verbunden mit sportlicher Betätigung war schon immer die Basis für einen lustigen, unterhaltsamen Kegelabend. Vereinbaren Sie doch gleich heute Ihren nächsten Kegeltreff! Wir freuen uns auf Ihren Besuch. "auf geht´s"»
Факты: 2 Bundeskegelbahnen. Фото дорожек. Блок «Kegelabend buchen» (форма/телефон). CTA.

── AKTUELLES / EVENTS ──
Заголовок «Aktuelles und Events – Veranstaltungen», «im Adlersaal kommt Freude auf!».
Формат: карточки событий (дата, название, фото, кнопка «Reservieren»). Разделить предстоящие/прошедшие. ВАЖНО: даты в оригинале за 2025 г. — актуализировать под текущий год или пометить архивом. Пример события для переноса структуры:
«Wirtshaussingen mit Anton, Tila & Rosi» — даты 29.7. 19:30 (с Waltraud Mair "Meichelböcks Zenta"), 26.8., 30.9. (Oktoberfest), 28.10., 25.11. 19:00, 16.12. (Advent) 19:00. Фото Wirtshaussingen.
Инфо: Montag und Mittwoch Ruhetag; Di, Do, Fr, Sa, So ab 11 Uhr geöffnet.
Дать удобное добавление новых событий (CMS/коллекция).

── GALERIE ──
Masonry/сетка WebP с lightbox, категории: Gaststube · Saal · Feiern · Bistro · Kegelbahn. Lazy-load.

── KONTAKT ──
Заголовок «Ihr Kontakt zu uns».
Текст: «Haben Sie Fragen zu unserem Restaurant, oder möchten Sie einen Tisch reservieren? Kontaktieren Sie uns einfach und bequem über das Kontaktformular, und wir setzen uns schnellstmöglich mit Ihnen in Verbindung – oder rufen Sie uns an. Wir freuen uns auf Ihre Anfrage!»
Адрес: St.-Leonhard-Straße 1, 86483 Balzhausen + встроенная Google-карта.
Öffnungszeiten (см. выше).
Форма: Name, E-Mail, Telefon, Nachricht + валидация + защита от спама (honeypot/reCAPTCHA) + DSGVO-чекбокс + корректные состояния «gesendet / nicht gesendet».
Быстрые кнопки: Anrufen · WhatsApp · Route planen · E-Mail. Виджет онлайн-бронирования стола.

── IMPRESSUM + DATENSCHUTZ ──
Отдельные актуальные страницы (данные владельца: Familie Greiner, адрес, телефон, при наличии USt-ID). Современный cookie-consent (opt-in).

═══════════════════════════════════
ТЕХ. ТРЕБОВАНИЯ
═══════════════════════════════════
Mobile-first; изображения WebP + сжатие + lazy-load; семантический HTML; доступность (контраст, alt, фокус); Schema.org Restaurant; уникальные meta; sitemap.xml; robots.txt; HTTPS; аналитика с согласием; формы с валидацией и анти-спамом; DSGVO cookie-consent. Никаких тестовых заглушек — только реальный контент выше.
```

---

## Фото с текущего сайта (для сохранения)

Все ассеты лежат на CDN конструктора:
`https://le-cdn.website-editor.net/s/fb80fed32ee44a6bad52881dfe058d9a/dms3rep/multi/opt/`

Известные файлы (базовые имена):
- Логотип: `Adlerlogokl-1920w.jpg` (и вариант `Adlerlogokl-016972ee-1920w.jpg`)
- Главная (историческое фото): `IMG_20200213_113246klein-1920w.jpg`
- Aktuelles (афиша): `Wirtshaussingen-afea9c51-1920w.jpg`

⚠️ Фото галерей (Saal, Bistro, Gaststube, Kegelbahn) подгружаются через JavaScript — в исходном HTML их URL не видно, поэтому простым сохранением страницы они не берутся. Чтобы вытащить их все: открой каждую страницу в браузере → F12 → вкладка **Network** → фильтр **Img** → обнови страницу → сохрани все файлы `le-cdn.website-editor.net/...`. Либо скажи мне — я извлеку прямые URL всех изображений через браузер.

*URL с CDN содержат временную подпись (`Expires`/`Signature`) — качать надо свежими, ссылки живут ограниченно.*
```
