import React from 'react'

type Props = {}

const Stitches = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.85 7.5c0-.287.021-.569.063-.844l7.65-4.417c.3.117.587.26.859.424L3.77 6.503a.447.447 0 0 0-.234.374.447.447 0 0 0 .196.394l3.592 2.567-3.453 1.994A5.638 5.638 0 0 1 1.85 7.5Zm6.518 2.775a.42.42 0 0 0 .025-.014l1.448-.836a.448.448 0 0 0 .018-.01l1.451-.838a.45.45 0 0 0 .052-.756L7.828 5.2l3.388-1.957a5.637 5.637 0 0 1 1.849 5.24L5.569 12.81a5.623 5.623 0 0 1-.882-.41l3.681-2.126Zm-.187-.931L4.817 6.939l.692-.4 3.297 2.444-.625.36ZM6.36 6.048l.62-.357 3.296 2.444-.62.358L6.36 6.048Zm1.973-4.137-6.09 3.515a5.652 5.652 0 0 1 6.09-3.515ZM6.847 13.113a5.652 5.652 0 0 0 5.842-3.373l-5.842 3.373ZM7.5.85a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3Z"
      fill="currentColor"
    />
  </svg>
)

const NextJs = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033c-3.407.306-6.6 2.145-8.622 4.972a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695c.779.25 1.6.422 2.534.525c.363.04 1.935.04 2.299 0c1.611-.178 2.977-.577 4.323-1.264c.207-.106.247-.134.219-.158c-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592l-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51c-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106l.006-4.703l.007-4.705l.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051c.478 0 .558.018.682.154a466.83 466.83 0 0 1 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879l.096-.063a12.317 12.317 0 0 0 2.466-2.163a11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748c0-.893-.012-1.088-.108-1.747c-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218l-.744-1.14l-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
    />
  </svg>
)

const Vercel = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M24 22.525H0l12-21.05l12 21.05z" />
  </svg>
)

export { Stitches, NextJs, Vercel }
