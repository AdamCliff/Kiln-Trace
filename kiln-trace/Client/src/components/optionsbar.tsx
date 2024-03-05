import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function OptionsBar() {
  return (
    <>
      <div id="options-bar">Options</div>
    </>
  );
}

export default OptionsBar;

{
  /* <div className="options-bar flex flex-col flex-grow gap-10 w-[10%] px-4 py-14 border-r border-red">
<section className="layout-section flex items-start justify-center flex-col gap-5 w-full">
  <h3 className="text-2xl text-red">Layout</h3>
  <div className="layouts flex items-center justify-start gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-10 stroke-red bg-opaqueGrey rounded cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-10 stroke-red bg-opaqueGrey rounded cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
      />
    </svg>
  </div>
</section>
<section className="filter-section flex items-start justify-center flex-col gap-5 w-full">
  <h3 className="text-2xl text-red">Filters</h3>
  <Accordion type="multiple" className="flex flex-col gap-2 w-full">
    <AccordionItem value="item-1" className="acc-item px-2">
      <AccordionTrigger className="text-red hover:no-underline">
        Stage
      </AccordionTrigger>
      <AccordionContent className="text-red">
        Stage options
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="acc-item px-2">
      <AccordionTrigger className="text-red hover:no-underline">
        Date
      </AccordionTrigger>
      <AccordionContent className="text-red">
        Date range
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>
</div> */
}
