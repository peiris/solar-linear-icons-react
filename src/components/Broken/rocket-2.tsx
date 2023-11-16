import * as React from "react";
import type { SVGProps } from "react";
const SvgRocket2 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.078 13.417a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-2.222 1.16-.53-.531.53.53ZM2.32 13.04l-.53-.53.53.53Zm.683.377a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm8.604 5.57a.75.75 0 1 0-1.06-1.061l1.06 1.061Zm-2.222 1.159.53.53-.53-.53Zm1.538 1.536.53.53-.53-.53Zm.684.377a.75.75 0 1 0-1.06-1.061l1.06 1.061Zm-.973-4.873a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM7.47 18.228a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm.387-3.814a.75.75 0 1 0-1.06-1.061l1.06 1.06ZM4.68 15.47a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm2.781 2.112a.75.75 0 0 0-1.048-1.073l1.048 1.073Zm-2.758.6a.75.75 0 1 0 1.049 1.072L4.702 18.18Zm.316-5.826-1.692 1.69 1.06 1.061 1.692-1.69-1.06-1.06Zm-2.17 1.215.154-.154-1.06-1.06-.153.153 1.06 1.061Zm0 .475a.335.335 0 0 1 0-.475l-1.06-1.061a1.835 1.835 0 0 0 0 2.597l1.06-1.061Zm.478 0a.338.338 0 0 1-.477 0l-1.06 1.061c.717.717 1.88.717 2.597 0l-1.06-1.061Zm7.22 3.88-1.692 1.69 1.06 1.06 1.692-1.689-1.06-1.061Zm.906 4.287.154-.154-1.06-1.061-.154.153 1.06 1.062Zm-2.598 0c.717.716 1.88.716 2.598 0l-1.06-1.062a.338.338 0 0 1-.478 0l-1.06 1.062Zm0-2.598a1.835 1.835 0 0 0 0 2.598l1.06-1.062a.335.335 0 0 1 0-.474l-1.06-1.062Zm.718-3.49L7.47 18.228l1.06 1.06 2.103-2.102-1.06-1.06Zm-2.776-2.772L4.68 15.47l1.061 1.06 2.117-2.116-1.06-1.061Zm-.384 3.156-1.71 1.672 1.049 1.073 1.71-1.672-1.05-1.073ZM9.743 13.057l.53-.532-.53.532Zm0-4.656-.53-.531.53.531Zm5.837 5.82.53.53-.53-.53Zm-4.67 0-.53.53.53-.53Zm9.64-4.956-.53-.53.53.53Zm-4.595-7.77a.75.75 0 0 0 .573 1.386l-.573-1.386ZM9.797 13.107a.75.75 0 0 0 1.06 1.063l-1.06-1.063Zm2.81-.683a.75.75 0 1 0-1.059-1.062l1.06 1.062Zm1.08 3.362.258.704-.259-.704Zm-5.5-5.535-.696-.28.696.28Zm6.268-5.488a.75.75 0 1 0-1.06-1.063l1.06 1.063Zm5.565 3.971-4.97 4.955 1.06 1.063 4.969-4.955-1.059-1.063Zm-8.58 4.955-1.167-1.164-1.06 1.063 1.168 1.164 1.059-1.063ZM18.215 2.75h.483v-1.5h-.483v1.5Zm3.035 2.542v.482h1.5v-.482h-1.5ZM18.698 2.75c.8 0 1.324.002 1.712.054.367.049.498.13.577.21l1.06-1.063c-.405-.403-.905-.563-1.438-.634-.51-.069-1.154-.067-1.91-.067v1.5Zm4.052 2.542c0-.755.002-1.396-.067-1.906-.072-.532-.232-1.032-.637-1.435l-1.059 1.062c.079.079.16.208.21.573.052.387.053.909.053 1.706h1.5Zm-12.477 7.233c-.566-.563-.935-.934-1.173-1.244-.224-.293-.258-.442-.258-.552h-1.5c0 .571.241 1.038.567 1.464.313.409.77.861 1.304 1.395l1.06-1.063Zm.108 2.226c.535.534.989.989 1.399 1.3.427.326.894.565 1.465.565v-1.5c-.113 0-.263-.035-.557-.258-.311-.237-.683-.605-1.248-1.169l-1.06 1.063Zm10.698-4.954c.672-.67 1.166-1.144 1.425-1.768l-1.385-.575c-.118.283-.34.523-1.099 1.28l1.059 1.063Zm.171-4.023c0 1.07-.013 1.396-.131 1.68l1.385.575c.26-.624.246-1.307.246-2.255h-1.5ZM18.215 1.25c-.951 0-1.635-.013-2.26.245l.573 1.386c.285-.118.614-.131 1.687-.131v-1.5Zm-7.359 12.92 1.751-1.746-1.059-1.062-1.75 1.745 1.058 1.063Zm4.194-.48c-.436.434-.76.756-1.037.995-.278.24-.456.35-.586.397l.518 1.408c.383-.141.723-.388 1.049-.67.327-.282.694-.648 1.115-1.069L15.05 13.69Zm-1.623 1.392a.508.508 0 0 1-.182.034v1.5c.244 0 .476-.044.7-.126l-.518-1.408ZM9.213 7.87c-.411.41-.77.768-1.05 1.087-.279.318-.524.648-.672 1.015l1.392.56c.053-.133.168-.312.408-.586.239-.273.557-.59.982-1.014L9.213 7.87ZM7.491 9.972c-.096.24-.149.49-.149.757h1.5a.51.51 0 0 1 .041-.198l-1.392-.56Zm2.782-1.04 4.182-4.17-1.06-1.062-4.182 4.17 1.06 1.062Z"
      />
      <path
        fill="currentColor"
        d="m8.037 10.102.53-.53V9.57l-.53.53Zm3.634-3.398a.75.75 0 1 0 .812-1.262l-.812 1.262Zm-.13-.975.407-.631-.406.63ZM9.359 4.608l.11-.742-.11.742ZM5.19 7.12l.53.531-.53-.531ZM7.84 4.802l.287.693-.287-.693Zm-2.105 3.51-.277.698.277-.698Zm-.181.736a.75.75 0 1 0 .571-1.387l-.571 1.387Zm-.141-.863.276-.697-.276.697Zm2.245 2.597a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm.502-1.618a.75.75 0 0 0-1.06 1.062l1.06-1.062Zm4.324-3.722-.535-.344-.812 1.261.535.345.812-1.262Zm-.535-.344c-.527-.34-.958-.617-1.33-.817-.38-.205-.745-.355-1.15-.415l-.22 1.484c.169.025.36.09.66.251.308.167.682.407 1.228.758l.812-1.261ZM5.72 7.651c.479-.477.99-.987 1.45-1.406.229-.21.436-.388.613-.524.188-.145.299-.208.342-.226L7.55 4.109a3.197 3.197 0 0 0-.683.424c-.223.172-.464.38-.708.604-.489.445-1.025.98-1.498 1.452L5.72 7.65Zm3.746-3.785a3.623 3.623 0 0 0-1.916.243l.575 1.386c.365-.152.753-.2 1.122-.145l.22-1.484ZM5.136 8.882l.321.128.553-1.395-.322-.127-.552 1.394Zm.321.128.096.038.571-1.387-.114-.046-.553 1.395Zm-.795-2.421a1.4 1.4 0 0 0 .474 2.293l.552-1.394a.1.1 0 0 1 .033.163L4.66 6.59Zm2.845 4.043.15.15 1.06-1.06-.15-.15-1.06 1.06Zm-.408-.406.409.407L8.567 9.57l-.408-.407-1.06 1.062ZM13.925 16.025l-.53.53a.759.759 0 0 0 .035.034l.495-.564Zm4.62-4.54a.75.75 0 0 0-1.26.816l1.26-.815Zm-.285.942-.63.407.63-.407Zm1.124 2.177.742-.11-.742.11Zm-2.52 4.154-.53-.53.53.53Zm2.325-2.639-.692-.289.692.289Zm-2.656 2.242a.75.75 0 1 0-1.393.555l1.393-.555Zm-2.658-1.382a.75.75 0 1 0 .989-1.128l-.99 1.128Zm2.918 1.85.53.531-.53-.53Zm-2.577-3.573a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.07-2.955.344.533 1.26-.815-.346-.533-1.259.815Zm-.951 5.926-.072.071 1.06 1.063.071-.072-1.06-1.062Zm1.295-5.393c.353.545.594.918.76 1.225.162.298.227.489.252.656l1.484-.22c-.06-.407-.21-.77-.417-1.15-.2-.371-.48-.8-.82-1.326l-1.259.815Zm-.236 6.455c.473-.471 1.01-1.006 1.456-1.493.224-.244.434-.484.606-.706.163-.21.328-.45.425-.682l-1.384-.578a1.894 1.894 0 0 1-.227.34 10.08 10.08 0 0 1-.525.612c-.42.457-.931.968-1.41 1.445l1.059 1.062Zm1.248-4.574c.055.366.007.752-.145 1.115l1.384.578c.254-.608.34-1.27.245-1.914l-1.484.22Zm-3.778 1.136-.445-.39-.989 1.128.445.39.989-1.128Zm1.4 2.447a.164.164 0 0 1 .144-.045.178.178 0 0 1 .125.108l-1.393.555c.356.895 1.515 1.11 2.183.444l-1.06-1.062Zm-1.81-2.803-.238-.24-1.06 1.061.238.24 1.06-1.061ZM15.05 9.414a.75.75 0 0 0 1.059-1.062l-1.06 1.062Zm2.335-1.062a.75.75 0 0 0 1.059 1.062l-1.06-1.062Zm1.059-2.328a2.404 2.404 0 0 0-3.394 0l1.059 1.062a.904.904 0 0 1 1.276 0l1.059-1.062Zm-3.394 0a2.393 2.393 0 0 0 0 3.39l1.059-1.062a.893.893 0 0 1 0-1.266l-1.06-1.062Zm3.394 3.39a2.392 2.392 0 0 0 0-3.39l-1.06 1.062c.351.35.351.916 0 1.266l1.06 1.062Z"
      />
    </svg>
  );
};
export default SvgRocket2;