"use client"
import { Kopen } from "@/types";
import Grid from "@/components/shared/ui/grid";
import Section from "@/components/shared/ui/section";
import Container from '@/components/global/container';
import { motion, useScroll, useTransform } from "framer-motion";
import KopenCard from '@/components/shared/kopen-card';

export default function HomeCaseStudies({ kopen }: {
  kopen: Kopen[]
}) {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <Section className="relative mt-12 mb-6 md:mb-12 pt-4 lg:pt-28 md:pt-6 overflow-x-hidden">
      <Container>
        {/* <motion.div 
          className='-left-[140px] top-0 absolute text-[32px] md:text-[100px] font-light whitespace-nowrap ' 
          style={{ x }}
        >
          Vind jouw droomvastgoed
        </motion.div> */}
        <h2 className="text-primary -ml-1 text-2xl md:text-3xl font-light leading-none text-left">Ontdek de nieuwste panden te koop bij Guy Content</h2>
        <Grid className='lg:grid-cols-3 gap-8 md:gap-14 lg:gap-6 w-full'>
          {kopen?.map((item) => (
            <li key={item._id}>
              <KopenCard kopen={item} />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}