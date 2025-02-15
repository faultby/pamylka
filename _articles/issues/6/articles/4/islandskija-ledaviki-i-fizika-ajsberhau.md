---
layout: article
title: "Ісландскія ледавікі і фізіка айсбергаў"
author: "Света Волчак"
category_en: "Physics"
category_be: "Фізіка"
cover: "issues/6/articles/4/images/cover.png"
issue: 6
slug: islandskija-ledaviki-i-fizika-ajsberhau
---

# Ісландскія ледавікі і фізіка айсбергаў

{:.intro-paragraph}
Усім нам знаёмы выраз *вяршыня айсбергу*, які абазначае, што толькі малая частка ледзяное глыбы – над паверхняю вады, а асноўная частка – пад вадою. Я хілю да таго, што гэта агульнавядома, але давайце спраўдзім, чаму так, а таксама – якое формы можа быць айсберг і як ён можа плаваць, а якое формы быць НЕ можа ;)

![вокладка "Ісландскія ледавікі і Фізіка айсбергаў"]({{ site.baseurl }}/issues/6/articles/4/images/cover.png){:.article-image}

{:.figure-info}
Фатографка: Каця, заўзятая вандроўніца

У беларускай адукацыйнай сістэме (дапускаю, што ў постсавецкай) мы звычайна вучым **сілу Архімэда** як сілу, якая выштурхоўвае цела з вадкасці (1 панятак). Мне было вельмі цікава даведацца, што ў брытанскай сістэме гэтая ж тэма пачынаецца з вывучэння **сілы плывучасці** (*buoyancy force*). Яны (заходнееўрапейцы?) інакш тлумачаць з’яву. Цяпер гэта **сіла плывучасці**, якая падпарадкоўваецца **закону Архімэда** (2 паняткі). Больш укладзеная катэгарызацыя, але з больш чыстымі паняткамі, лягчэйшымі для запамінання.

Спачатку падлічым задачу пра лёд у вадзе: якая частка лёду будзе над паверхняю вады? (Шчыльнасць акіянічнае вады $ρ_{в} = 1024 \space \frac{кг}{м_3}$, шчыльнасць айсбергу – $ρ_{а} = 917 \space \frac{кг}{м_3}$ )

![Сілы, якія дзейнічаюць на айсберг]({{ site.baseurl }}/issues/6/articles/4/images/fig-14.png){:.article-image}

Паводле другога закону Ньютана, паколькі цела не рухаецца, сілы, што ўздзеюць на яго, – у раўнавазе. Значыць:

$$
F_{цяжару} = F_{Архімеда}
$$

Далей падстаўляем формулы для сілы цяжару і сілы Архімэда:

$$
m_{A}g = \rho_{в} gV_{пагр.} \tag{1}
$$

$$
m_{A} = \rho_{в}V_{пагр.}
$$

$$
m_{A} = \rho_{A}V_{A} \tag{2}
$$

$$
V_{A} = V_{над}+V_{пагр.} \tag{3}
$$

$$
V_{пагр.} = V_{A} - V_{над}
$$

$$
\rho_{A}V_{A} = \rho_{в}(V_{A} - V_{над}) \space |:V_{A} \tag{4}
$$

$$
\rho_{A} = \rho_{в}(1 - \frac{V_{над}}{V_{A}})
$$

$$
\frac{\rho_{A}}{\rho_{в}} = 1 - \frac{V_{над}}{V_{A}}
$$

$$
\frac{V_{над}}{V_{A}} = 1 - \frac{\rho_{A}}{\rho_{в}} = 1 - \frac{917}{1024} \approx 0.104
$$

$$
V_{над} = 10.4 \% \space V_{A}
$$

Атрымоўваем, што пры такіх шчыльнасцях вяршыня айсбергу займае 10,4 % ад усяго айсбергу. Прыблізна гэтак і кажуць людзі. А далей ідзе яшчэ больш цікавы момант: айсберг не можа плаваць у вадзе абы-як. Напрыклад, гэтак:

![Айсберг з вікіпедыі]({{ site.baseurl }}/issues/6/articles/4/images/fig-2.png){:.article-image}

{:.figure-title}
Гэта фотамантаж з Вікіпедыі

{:.figure-info}
[https://commons.wikimedia.org/wiki/File:Iceberg.jpg](https://commons.wikimedia.org/wiki/File:Iceberg.jpg)

Зараз мы разбурым самы папулярны візуальны міф пра айсбергі, шматлікія мастацкія выявы якога вы можаце знайсці на стоках: айсберг не можа плаваць вертыкальна!

Гэта немагчыма, бо насамрэч сіла плывучасці прыкладаецца не да цэнтру масаў усяго цела, а да цэнтру масаў пагружанае часткі цела. Пры гэтым пры любых гайданнях аднароднага вертыкальнага цела ўзнікае момант сілы (*torque*), які паварочвае цела набок. (Дзеля эксперыменту паспрабуйце пагрузіць у ваду корак вертыкальна. Ён перавернецца!)

Незвычайны і захапляльны праект паўстаў як пошук мастацкага развязання гэтага задання. Карыстальніца *Twitter*’у *@GlacialMeg* Мэґан Томпсан-Мансан (*Megan Thompson-Munson*) зрабіла допіс у 2021 годзе, дзе папрасіла навукоўцаў дапамагчы правільна размясціць айсберг адносна вады.

![Допіс Мэґан Томпсан-Мансан]({{ site.baseurl }}/issues/6/articles/4/images/fig-15.png){:.article-image}

На запыт адгукнуўся
Джошуа Таўбэрэр
(*Joshua Tauberer*), інжынер праграмнага
забеспячэння, і стварыў
сімпатычны
ды
ненавязлівы
праект-
гульню, старонку, дзе
кожны можа намаляваць
форму
айсбергу і пабачыць, як
айсберг з такою формаю будзе плаваць!

![Гульня-маляванка Джошуа Таўбэрэра]({{ site.baseurl }}/issues/6/articles/4/images/fig-16.png){:.article-image}

{:.figure-title}
![Гульня-маляванка](https://joshdata.me/iceberger.html) ад Джошуа Таўбэрэраю

Для мяне гэта выдатны прыклад таго, як з дапамогаю сучасных тэхналогіяў можна прасоўваць навуковыя веды :) А цяпер – насалоджвайцеся прыгожымі Кацінымі здымкамі.

![Фатаграфія ісладскіх ледавікоў 2]({{ site.baseurl }}/issues/6/articles/4/images/fig-3.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 3]({{ site.baseurl }}/issues/6/articles/4/images/fig-4.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 4]({{ site.baseurl }}/issues/6/articles/4/images/fig-5.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 5]({{ site.baseurl }}/issues/6/articles/4/images/fig-6.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 6]({{ site.baseurl }}/issues/6/articles/4/images/fig-7.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 7]({{ site.baseurl }}/issues/6/articles/4/images/fig-8.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 8]({{ site.baseurl }}/issues/6/articles/4/images/fig-9.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 9]({{ site.baseurl }}/issues/6/articles/4/images/fig-10.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 10]({{ site.baseurl }}/issues/6/articles/4/images/fig-12.png){:.article-image}
![Фатаграфія ісладскіх ледавікоў 11]({{ site.baseurl }}/issues/6/articles/4/images/fig-13.png){:.article-image}
