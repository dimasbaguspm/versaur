# PageLayout

A compound layout component for managing page-level structure between header and content regions.

## Installation

```bash
npm install versaur
```

## Usage

```tsx
import { PageLayout } from 'versaur/layouts'
import { PageHeader, PageContent } from 'versaur/layouts'

function MyPage() {
  return (
    <PageLayout>
      <PageLayout.HeaderRegion>
        <PageHeader title='Page Title' subtitle='Description' />
      </PageLayout.HeaderRegion>
      <PageLayout.ContentRegion>
        <PageContent size='wide'>{/* Your content here */}</PageContent>
      </PageLayout.ContentRegion>
    </PageLayout>
  )
}
```

## Props

### PageLayout (Root)

| Prop        | Type      | Default | Description                               |
| ----------- | --------- | ------- | ----------------------------------------- |
| `hasMargin` | `boolean` | `false` | Add horizontal margins to the page layout |

### HeaderRegion

| Prop              | Type                | Default   | Description                           |
| ----------------- | ------------------- | --------- | ------------------------------------- |
| `backgroundColor` | `'white' \| 'gray'` | `'white'` | Background color of the header region |

### ContentRegion

| Prop              | Type                | Default   | Description                            |
| ----------------- | ------------------- | --------- | -------------------------------------- |
| `backgroundColor` | `'white' \| 'gray'` | `'white'` | Background color of the content region |

## Examples

### With Margins

```tsx
<PageLayout hasMargin>
  <PageLayout.HeaderRegion>
    <PageHeader title='Page Title' />
  </PageLayout.HeaderRegion>
  <PageLayout.ContentRegion>
    <PageContent size='wide'>{/* content */}</PageContent>
  </PageLayout.ContentRegion>
</PageLayout>
```

### Different Backgrounds

```tsx
<PageLayout>
  <PageLayout.HeaderRegion backgroundColor='gray'>
    <PageHeader title='Dashboard' />
  </PageLayout.HeaderRegion>
  <PageLayout.ContentRegion backgroundColor='white'>
    <PageContent size='wide'>{/* content */}</PageContent>
  </PageLayout.ContentRegion>
</PageLayout>
```

## See Also

- [PageHeader](/layouts/page-header)
- [PageContent](/layouts/page-content)
- [AppLayout](/layouts/app-layout)
