<template>

    <Head>
        <Meta name="description" content="درباره علیرضا جوادزاده">
        </Meta>
    </Head>
    <div class="main-section">
        <v-row>
            <v-col cols="12">
                <div class="a-title-box">
                    <h1 class="a-title">درباره من</h1>
                </div>
                <div class="a-text-box">
                    <p>من علیرضا جوادزاده متولد 1376/08/08 هستم.</p>
                    <p>در رشته عمران تحصیل کردم و گرایش من در مقطع ارشد سازه بود.</p>
                    <p>با توجه به علاقه ای که داشتم در حین تحصیل شروع به یادگیری برنامه نویسی به صورت خودآموز کردم و در این حرفه به سمت یادگیری توسعه وب سایت و اپلیکیشن رفتم.</p>
                    <p>در سال های گذشته با 2 <NuxtLink class="text-link" to="https://sepanodata.ir/">شرکت سپانو داده پارس</NuxtLink> و <NuxtLink class="text-link" to="https://www.spad.co/">آژانس تبلیغاتی اسپاد</NuxtLink> بصورت تمام وقت و <NuxtLink class="text-link" to="https://partouka.com/">شرکت پارتوکا</NuxtLink> بصورت پارت تایم و پروژه ای همکاری کردم.</p>
                    <p>برای مشاهده پروژه های بنده میتوانید به صفحه <NuxtLink to="/project" class="text-link">پروژه های من</NuxtLink> مراجعه نمایید</p>
                    <h3 class="subtitle">برنامه نویسی</h3>
                    <p>در زمینه برنامه نویسی تسلط من به زبان های javascript, typscript, dart میباشد و با فریمورک های vue , flutter , Nuxt کار کرده ام</p>
                    <p>برای توسعه وب اپلیکیشن ها با فریمورک vue از ورژن 3 این فریمورک استفاده میکنم(composition api) و برای کنترل دیتا ها از statemanagment pinia استفاده میکنم.</p>
                    <p>برای اپلیکیشن های android , ios نیز از flutter استفاده میکنم.</p>
                    <p>یکی دیگر از تجریبات من در این زمینه، طراحی و توسعه سایت با سیستم وردپرس است که از پلاگین هایی مثل elementor , yoast seo استفاده کرده ام</p>
                    <p>همچنین با برخی ابزار های SEO از جمله lighthouse , search console , google analytics هم در سطح اولیه استفاده کرده ام تا کد های بهینه تری برای موتور های جستجوگر گوگل توسعه دهم</p>
                    <h3 class="subtitle">مهندسی عمران</h3>
                    <p>در زمینه عمران، تجربه کار با نرم افزار های Etabs , opensees , diana را برای طراحی و تحلیل سازه ها در برابر بار های وارده و نیروی زلزله در حد پروژه های دانشگاهی دارم.</p>
                    <p>موضوع پایان نامه بنده نیز به سازه های آجری مربوط میشود که در آن به تحلیل و مدلسازی سازه های آجری و مقاومسازی آن تحلیل بار های خارج صفحه  (باد و زلزله) میپردازیم.</p>
                    <h3 class="subtitle">تجربیات کاری دیگر</h3>
                    <p>یکی دیگر از جایگاه های شغلی که در آن فعالیت داشتم سرپرست کال سنتر و تجربه کار با سیستم های CRM است.</p>
                    <P>قبل از شروع برنامه نویسی و زمانی که میخواستم وارد بازار کار بشم، فعالیتم را در مجموعه داروکده در قسمت فروش اینترنتی شروع کردم و پس از مدتی مسئولیت سرپرستی مرکز تماس داروکده را برعهده گرفتم.</P>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>

</script>

<style scoped>
.main-section {
    padding: 16px;
    height: 100%;
    min-height: 90dvh;
}

.a-title-box {
    display: flex;
    justify-content: flex-end;
}

.a-title {
    padding-bottom: 4px;
    border-bottom: 1px solid #000;
    display: inline;
    font-weight: normal;
}

.a-text-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 2rem 0;
}

.a-text-box p {
    font-size: 15px;
    font-weight: 300;
    line-height: 2rem;
    text-align: right;
    direction: rtl;
}

.text-link{
    text-decoration: none;
    font-weight: 400;
    color: #000;
}

.project-link:hover{
    color: #636363;
}

.subtitle{
    font-size: 17px;
    font-weight: 400;
    margin-top: 1.5rem;
    margin-bottom: 0.3rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #000;
}
</style>