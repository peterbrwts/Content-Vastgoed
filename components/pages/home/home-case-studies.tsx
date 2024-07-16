"use client"
import { Aanbod } from "@/types";
import Grid from "@/components/shared/ui/grid";
import Section from "@/components/shared/ui/section";
import Container from '@/components/global/container';
import { motion, useScroll, useTransform } from "framer-motion";
import AanbodCard from '@/components/shared/aanbod-card';

export default function HomeCaseStudies({ aanbod }: {
  aanbod: Aanbod[]
}) {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <Section className="relative mt-12 mb-6 md:mb-12 pt-28 md:pt-64 overflow-x-hidden">
      <Container>
        <motion.div 
          className='-left-[140px] top-0 absolute text-[32px] md:text-[100px] font-light whitespace-nowrap ' 
          style={{ x }}
        >
          Vind jouw droomvastgoed
        </motion.div>
        <h2 className="text-3xl font-bold text-primary mb-4">Ontdek de nieuwste panden te koop bij Guy Content</h2>
        <Grid className='lg:grid-cols-3 gap-8 md:gap-14 lg:gap-6 w-full'>
          {aanbod?.map((item) => (
            <li key={item._id}>
              <AanbodCard aanbod={item} />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}