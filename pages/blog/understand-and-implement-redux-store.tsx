import ArticleHeader from "../../src/components/ArticleHeader";
import ArticleImage from "../../src/components/ArticleImage";
import Para from "../../src/components/Para";
import QuotedText from "../../src/components/QuotedText";
import SectionSeperator from "../../src/components/SectionSeperator";
import SectionTitle from "../../src/components/SectionTitle";
import BlogLayout from "../../src/layouts/BlogLayouts";
import { ArticleHeaderLayouts, ArticleImageWidths, BlogLayouts, SectionSeperatorTypes, TextAlign } from "../../src/shared/enums";
import { getArticleDetails } from "../../src/utils/utils";

const Article = () => {
    const ARTICLE_DETAILS = getArticleDetails();
    
    return (
        <BlogLayout layout={BlogLayouts.CENTERED}>
            <ArticleImage src="/images/dummy-banner-img.jpg" alt="dummy image alt text" size={ArticleImageWidths.FUll} />
            <ArticleHeader type={ArticleHeaderLayouts.CENTERED} headerData={ARTICLE_DETAILS.preview} />
            <Para textAlign={TextAlign.RIGHT}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
            <SectionSeperator type={SectionSeperatorTypes.DOTS} />
            <SectionTitle textAlign={TextAlign.CENTER}>
                Lorem ipsum dolor sit amet, consectetur elit, <br /> sed do eiusmod tempor
            </SectionTitle>
            <Para textAlign={TextAlign.JUSTIFY}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
            <QuotedText textAlign={TextAlign.RIGHT}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </QuotedText>
            <Para textAlign={TextAlign.CENTER}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
        </BlogLayout>
    )
}

export default Article;