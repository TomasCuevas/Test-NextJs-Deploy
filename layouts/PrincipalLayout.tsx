import Head from "next/head";

interface PrincipalLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const PrincipalLayout: React.FC<PrincipalLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main>{children}</main>
    </>
  );
};
