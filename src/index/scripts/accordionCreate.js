const container = document.createElement('div');
container.className = 'container';
document.getElementsByTagName('body')[0].appendChild(container);

const mainAccordion = document.createElement('div');
mainAccordion.className = 'accordion';
container.appendChild(mainAccordion);

let panels = [
    {tabClassName: 'accordion-tab', tabIdName: 'tabFirst',  titleClassName: 'accordion-tab__title deep-purple accent-4', titleIconClassName: 'material-icons',
        titleIconText: 'phone_iphone', titleText: 'iPhone', contentClassName: 'accordion-tab__content',
        contentText: '* The iPhone Upgrade Program is available to qualified customers and requires service with AT&T, Sprint, T-Mobile, or Verizon.\n' +
        '                    A two-year installment loan and iPhone activation are required. Terms apply.\n' +
        '                    † Trade-in values may vary based on the condition and model of your smartphone trade-in.\n' +
        '                    Offer may not be available in all stores and not all devices are eligible for credit.\n' +
        '                    Additional terms apply. Learn more.\n' +
        '                    Some AR apps shown may not be available in all regions or all languages.'},
    {tabClassName: 'accordion-tab', tabIdName: 'tabSecond',  titleClassName: 'accordion-tab__title deep-purple accent-4', titleIconClassName: 'material-icons',
        titleIconText: 'desktop_mac', titleText: 'iMac', contentClassName: 'accordion-tab__content',
        contentText: 'Power to the pro.\n' +
        '                    Pros love iMac. So we created one just for you. It’s packed with the most powerful graphics and processors ever in a Mac,\n' +
        '                    along with the most advanced storage, memory, and I/O — all behind a breathtaking Retina 5K display in a sleek,\n' +
        '                    all-in-one design. For everyone from photographers to video editors to 3D animators to musicians to software developers to scientists,\n' +
        '                    iMac Pro is ready to turn your biggest ideas into your greatest work.'},
    {tabClassName: 'accordion-tab', tabIdName: 'tabThird',  titleClassName: 'accordion-tab__title deep-purple accent-4', titleIconClassName: 'material-icons',
        titleIconText: 'crop_portrait', titleText: 'iPad', contentClassName: 'accordion-tab__content',
        contentText: '* $285 trade-in refers to an iPad in excellent condition. Trade-in values will vary based on the condition, year, and configuration of your trade-in device. Not all devices are eligible for credit; to see if your device is eligible and to get an estimate, please visit Apple’s trade-in partner. Trade-in value is based upon the received device matching the description you provided when your estimate was made. You must be at least 18 years old to be eligible to trade in for credit or to trade in for an Apple Store Gift Card. Online and in-store values may vary. Apple reserves the right to refuse or limit the quantity of any device for any reason. In Apple Stores: Offer only available on presentation of a valid, government-issued photo ID (local law may require saving this information). Value of your current device may be applied toward purchase of a new Apple device. Offer may not be available in all stores.\n' +
        '                    Battery life varies by use and configuration; see www.apple.com/batteries for more information.\n' +
        '                    Sold separately.'}
]

panels.forEach(function(item){
    const accordionTab = document.createElement('div');
    mainAccordion.appendChild(accordionTab);
    const accordionTitle = document.createElement('div');
    accordionTab.appendChild(accordionTitle);
    const titleIcon = document.createElement('i');
    accordionTitle.prepend(titleIcon);
    const accordionContent = document.createElement('div');
    accordionTab.appendChild(accordionContent);
    accordionTab.className = item.tabClassName;
    accordionTab.id = item.tabIdName;
    accordionTitle.className = item.titleClassName;
    titleIcon.className = item.titleIconClassName;
    titleIcon.innerHTML = item.titleIconText;
    accordionTitle.innerHTML = item.titleText;
    accordionTitle.prepend(titleIcon);
    accordionContent.className = item.contentClassName;
    accordionContent.innerHTML = item.contentText;
    console.log(accordionTab);
});

