import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KettleBerry&trade; Coffee</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <img src='/kettleberry.png' className="mockup" />
        <p>
          For mornings when you crave café-quality coffee, but you do not wish to step outside your home - 
          Kettleberry&trade; brings a fresh new outlook for coffee connoisseurs and alike.  
          Discover delightfully nuanced coffee—in the comfort of your home. Welcome to your new ritual! 100% pure fuss free coffee, no added chicory or taste enhancers. 
        </p>
        <p>
          We work directly with indigenous farmers to ensure that our coffee remains both sustainable and most delicious. 
          We ensure that our coffee remains full bodied – free of any ripening agents. Our coffee beans are naturally ripened and the choicest of beans are then hand-picked. 
          Only the AAA grade arabica beans goes into our coffee and then we roast them to our exacting flavor standards, and serve them to you at peak deliciousness! 
        </p>
        <p>
          We at Ketteberry&trade; ensure to provide you delicious full bodied coffee and think it’s a privilege to deliver the coffees we love, 
          by farmers we admire, into your hands or onto your doorstep. Various flavoured coffee blends will be introduced from time to time once 
          they have been synergized to maintain their distinctive flavours.
        </p>
      </main>

      <Footer />
    </div>
  )
}
