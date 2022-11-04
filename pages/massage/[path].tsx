import {useRouter} from "next/router";
import Head from 'next/head';
import {useAppContext} from "../../context/state";
import Image from "next/image";
/*import Banner from '../../components/Banner';
import Gift from '../../components/Gift';
import Price from '../../components/Price';
import Title from '../../components/Title';
import Opinion from '../../components/Opinion';*/

const Massage = () => {
  const router = useRouter();
  const path = router.query.path;
  useAppContext().setMassageWithPath(path);
  const massage = useAppContext().massage;

  // const massagesPathes = useAppContext().massagesPathes;
  //  useEffect(() => {
  //    if (massage === undefined) {
  //      router.push("/404")
  //    }
  //  }, [path, router])


  return (
    <div>
      <Head>
        <title>{massage.name}</title>
      </Head>
      {/*<Banner bannerimg={`/images/massages/${massage.bannerimg}`}/>*/}

      <div className="grid grid-cols-12 mb-8">
        <main
          className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 2xl:col-start-4 2xl:col-end-10 text-secred">
          {/*<Title title1={title} title2={massage.name}/>*/}
          <div>{massage.name}</div>
          <Image src={`/images/massages/${massage.img1}`} alt={"Illustration 1 du massage" + massage.name} width={591} height={394} />

          <div>{massage.shortdescription}</div>

          {/*<Price massage={massage}/>*/}
          <div className="flex flex-col md:flex-row md:items-center mt-8 mb-8">
            <article className="flex-1">
              <h2 className="text-center text-xl md:text-2xl uppercase mb-6 font-Montserrat">Les bienfaits</h2>
              {/*{massage.benefits.map((benefit: string) => (
              <p key={benefit} className="pb-1">{benefit}.</p>
            ))}*/}
              <p className="italic mt-4 mb-4">NB : Les huiles utilisées sont biologiques et désodorisées.</p>
            </article>
            <div className="flex-1 mx-8 md:mx-4">

            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row md:items-center">
            <div className="flex-1 mx-8 md:mx-4">

            </div>
            <article className="flex-1">
              <h2 className="text-center text-xl md:text-2xl uppercase mb-6 font-Montserrat">Recommandations</h2>
              <p className="">Avant notre rendez-vous, prenez une douche bien chaude afin de préparer votre corps à
                recevoir le massage.</p>
              <p className="">Evitez de manger 2 heures avant le massage.</p>
              <p className="pb-2">Après notre rendez-vous, attendez 30 minutes avant de manger. Hydratez vous bien !</p>
              <p className="font-semibold">NB : Mes massages s&apos;inscrivent dans un cadre préventif et n&apos;ont pas
                de visée thérapeutique. Ils n&apos;ont aucun caractère sexuel.</p>
            </article>
          </div>
        </main>
      </div>
      <div className="grid grid-cols-10 mb-8">

      </div>
    </div>
  );

}

export default Massage;