"use client"
import { CaseStudy } from "@/types";
import Grid from "@/components/shared/ui/grid";
import Section from "@/components/shared/ui/section";
import Container from '@/components/global/container';
import { motion, useScroll, useTransform } from "framer-motion";
import CaseStudyCard from '@/components/shared/case-study-card';

export default function HomeCaseStudies({ caseStudies }: {
  caseStudies: CaseStudy[]
}) {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <Section className="relative mt-12 mb-6 md:mb-12 pt-28 md:pt-64 overflow-x-hidden">
      <Container>
        <motion.div 
          className='-left-[640px] top-0 absolute text-[64px] md:text-[160px] font-extralight whitespace-nowrap' 
          style={{ x }}
        >
          Ontdek de nieuwste panden te koop bij Guy Content
        </motion.div>
        <Grid className='lg:grid-cols-3 gap-8 md:gap-14 lg:gap-6 w-full'>
          {caseStudies?.map((item) => (
            <li key={item._id}>
              <CaseStudyCard caseStudy={item} />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}