import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from '@reach/listbox';
import { type CSSProperties, css } from 'glamor';

import ExpandArrow from '../../icons/v0/ExpandArrow';
import { colors } from '../../style';

type SelectProps<Value extends string> = {
  options: Array<[Value, string]>;
  value: Value;
  defaultLabel?: string;
  onChange?: (newValue: Value) => void;
  style?: CSSProperties;
  wrapperStyle?: CSSProperties;
  line?: number;
  disabledKeys?: Value[];
};

/**
 * @param {Array<[string, string]>} options - An array of options value-label pairs.
 * @param {string} value - The currently selected option value.
 * @param {string} [defaultLabel] - The label to display when the selected value is not in the options.
 * @param {function} [onChange] - A callback function invoked when the selected value changes.
 * @param {CSSProperties} [style] - Custom styles to apply to the selected button.
 * @param {CSSProperties} [wrapperStyle] - Custom style to apply to the select wrapper.
 * @param {string[]} [disabledKeys] - An array of option values to disable.
 *
 * @example
 * // Usage:
 * // <Select options={[['1', 'Option 1'], ['2', 'Option 2']]} value="1" onChange={handleOnChange} />
 * // <Select options={[['1', 'Option 1'], ['2', 'Option 2']]} value="3" defaultLabel="Select an option"  onChange={handleOnChange} />
 */

export default function Select<Value extends string>({
  options,
  value,
  defaultLabel = '',
  onChange,
  style,
  wrapperStyle,
  line,
  disabledKeys = [],
}: SelectProps<Value>) {
  const arrowSize = 7;
  const targetOption = options.filter(option => option[0] === value);
  return (
    <ListboxInput
      value={value}
      onChange={onChange}
      style={{ lineHeight: '1em', ...wrapperStyle }}
    >
      <ListboxButton
        {...css([
          { borderWidth: 0, padding: '2px 5px', borderRadius: 4 },
          style,
        ])}
        arrow={<ExpandArrow style={{ width: arrowSize, height: arrowSize }} />}
      >
        <span
          style={{
            display: 'flex',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: `calc(100% - ${arrowSize + 5}px)`,
            minHeight: '18px',
            alignItems: 'center',
          }}
        >
          {targetOption.length !== 0 ? targetOption[0][1] : defaultLabel}
        </span>
      </ListboxButton>
      <ListboxPopover style={{ zIndex: 10000, outline: 0, borderRadius: 4 }}>
        {!line ? (
          <ListboxList style={{ maxHeight: 250, overflowY: 'auto' }}>
            {options.map(([value, label]) => (
              <ListboxOption
                key={value}
                value={value}
                disabled={disabledKeys.includes(value)}
              >
                {label}
              </ListboxOption>
            ))}
          </ListboxList>
        ) : (
          <ListboxList style={{ maxHeight: 250, overflowY: 'auto' }}>
            {options.slice(0, line).map(([value, label]) => (
              <ListboxOption
                key={value}
                value={value}
                disabled={disabledKeys.includes(value)}
              >
                {label}
              </ListboxOption>
            ))}
            <div
              style={{
                padding: '2px',
                marginTop: 5,
                borderTop: '1px solid ' + colors.n10,
              }}
            />
            {options.slice(line, options.length).map(([value, label]) => (
              <ListboxOption
                key={value}
                value={value}
                disabled={disabledKeys.includes(value)}
              >
                {label}
              </ListboxOption>
            ))}
          </ListboxList>
        )}
      </ListboxPopover>
    </ListboxInput>
  );
}
