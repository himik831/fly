import { MESSAGES } from "../../constants/localization/localization.js";
import { IntlProvider, FormattedMessage } from "react-intl";

export default function Localization({ language, id, defaultValue }) {
  return (
    <IntlProvider messages={MESSAGES[language]} locale="RO" defaultLocale="EN">
      <FormattedMessage id={id} defaultMessage={defaultValue} />
    </IntlProvider>
  );
}
